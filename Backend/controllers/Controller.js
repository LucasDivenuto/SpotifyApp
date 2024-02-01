import model from "../models/models.js";
import axios from 'axios';
import express from "express";

const app = express();


//Metodos CRUD


export const obtenerIp = (req) => {

    const clientIp =
        req.headers['cf-connecting-ip'] ||
        req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress;

    return clientIp;
};

export const create = async (req, res) => {
    const { nombre, fecha } = req.body;
    //const clientIp = obtenerIp(req);
    const clientIp = req.ip;            //Ambas formas de conseguir la IP me dan ::1
    try {
        await model.create({
            IPUsuario: clientIp,
            fechaSolicitud: fecha,
            nombreArtista: nombre,

        });

        res.status(200).json({ success: true });
    } catch (error) {
        res.json({ message: error.message })
    }


}


export const getAll = async (req, res) => {

    // try {
    //     console.log("getall")
    //     const registros = await model.findAll();
    //     res.json(registros)
    // } catch (error) {
    //     res.json({ message: error.message })
    // }
}

export const get = async (req, res) => {
    // try {
    //     console.log("get")
    //     const registro = await model.findAll({
    //         where: { id: req.params.id }
    //     });
    //     res.json(registro[0])
    // } catch (error) {
    //     res.json({ message: error.message })
    // }
}

export const update = async (req, res) => {
    // try {
    //     await model.update(req.body, {
    //         where: { id: req.params.id }
    //     });
    //     res.json({
    //         "message": "Resgistro actualizado"
    //     })
    // } catch (error) {
    //     res.json({ message: error.message })
    // }
}

export const eliminar = async (req, res) => {
    // try {
    //     await model.destroy({
    //         where: { id: req.params.id }
    //     });
    //     res.json({
    //         "message": "Resgistro eliminado"
    //     })
    // } catch (error) {
    //     res.json({ message: error.message })
    // }
}




// Obtengo el ID del artista
const getArtistId = async (artistName, accessToken) => {
    const searchResponse = await axios.get(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return searchResponse.data.artists.items[0].id;
};

// Obtengo la lista de álbumes de un artista
const getArtistAlbums = async (artistId, accessToken) => {
    const albumsResponse = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return albumsResponse.data.items;
};


// Obtengo el detalle de los albumes
const getAlbumDetailsById = async (albumId, accessToken) => {
    const albumDetailsResponse = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return albumDetailsResponse.data;
};
// Mapeo las propiedades que necesito
const mapAlbumDetails = albumDetails => ({
    id: albumDetails.id,
    title: albumDetails.name,
    images: albumDetails.images.map(image => image.url),
    popularity: albumDetails.popularity || 0,
});

// Ordeno de mayor a menor en popularity
const sortAlbumsByPopularityDesc = (albums) => {
    return albums.sort((a, b) => b.popularity - a.popularity);
};

export const searchAlbums = async (req, res) => {
    try {
        const { nombre, accessToken } = req.body;

        const artistId = await getArtistId(nombre, accessToken);
        const artistAlbums = await getArtistAlbums(artistId, accessToken);

        const albumsDetailsPromises = artistAlbums.map(album => getAlbumDetailsById(album.id, accessToken));
        const albumsDetails = await Promise.all(albumsDetailsPromises);

        const albums = albumsDetails.map(mapAlbumDetails);

        const albumsSortedByPopularity = sortAlbumsByPopularityDesc(albums);

        //console.log(albumsSortedByPopularity);

        res.status(200).json({ success: true, albums: albumsSortedByPopularity });
    } catch (error) {
        console.error('Hubo un error al obtener los álbumes:', error);
        throw error;
    }
};