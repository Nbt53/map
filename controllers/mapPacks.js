module.exports.renderHome =  (req, res) => {
    const postcode = res.locals.postcode
    res.render('home', { postcode })
}

module.exports.renderAdmin = (req, res) =>{
    res.render('admin')
}