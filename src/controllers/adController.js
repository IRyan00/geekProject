const Ad = require('../models/Ad');
const fs = require('fs');
const { v2: cloudinary } = require('cloudinary');


    cloudinary.config({
        cloud_name: 'dhbqf3vci',
        api_key: '748579176519384',
        api_secret: '2h6wj4pRBpopGI8c14LYA6tW3XY'
    });

exports.getAllAd = async (req, res) => {
    try {
        const ads = await Ad.find();
        res.status(200).json(ads);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la récupération des annonces`, error }
        );
    }
};

exports.getOneAd = async (req, res) => {
    const { id } = req.params;
    try {
        const oneAd = await Ad.findById(id);
        if (!oneAd) {
            return res.status(404).json({ error: 'une annonce not found' });
        }
        res.status(200).json(oneAd);
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la récupération d'une annonce`, error }
        );
    }
};
// Ajouter
exports.createAd = async (req, res) => {
    
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'no file uploaded' });
        }
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            folder: 'images',
        });

        fs.unlinkSync(req.file.path);


        const { titre, description, type, prix, idUser } = req.body;
        const newAd = await Ad.create({ titre, description, type, prix, idUser, public_id: uploadResult.public_id, url: uploadResult.secure_url });
        res.status(201).json(newAd)
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la création de l'annonce`, error })
    }
}

//supprimer

exports.deleteAd = async (req, res) => {
    const { id } = req.params;
    try {
        const ad = await Ad.findByIdAndDelete(id);
        if (!ad) {
            return res.status(404).json({ error: 'annonce not found' });
        }
        cloudinary.uploader.destroy(ad.public_id);
        res.status(201).json({ message: `L'annonce a bien été supprimée` })
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la suppression de l'annonce`, error })
    }
}

//modifier

exports.changeAd = async (req, res) => {
    const { id } = req.params;
    const { titre, description, type, prix } = req.body;
    try {
        const ad = await Ad.findByIdAndUpdate(
            id,
            { titre, description, type, prix },
            { new: true }
        );
        if (!ad) {
            return res.status(404).json({ error: 'image not found' });
        }
        res.json(ad)
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la modification de l'annonce`, error })
    }
}