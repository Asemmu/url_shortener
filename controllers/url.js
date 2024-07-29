const Url = require('../models/url');
const { validationResult } = require('express-validator');
const ShortUniqueId = require('short-unique-id');

exports.postUrl = async (req, res, next) => {
    const uid = new ShortUniqueId({ length: 20 });
    const urlId = uid.rnd();
    const errors = validationResult(req).array();
    if (errors.length > 0) {
        return res.json({ "error": errors[0].msg })
    }
    const new_url = Url.build({
        url: req.body.url,
        short_name: urlId
    })
    await new_url.save();
    res.json({ 'success': `${process.env.APP_URL}:${process.env.PORT}/url/${urlId}` })
    //const url = Url.build({url: })
}

exports.getUrl = async (req, res, next) => {
    const shortUrl = req.params.shortenUrl;

    const url = await Url.findOne({ where: { short_name: shortUrl } });
    if(url === null )
        {
            res.status(404);

            return res.json({"error": "No Data Found"})
        }
        res.status(302);

   return  res.redirect(url.url)
}