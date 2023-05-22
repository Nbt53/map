module.exports.renderHome =  (req, res) => {
    const postcode = res.locals.postcode
    res.render('home', { postcode })
}