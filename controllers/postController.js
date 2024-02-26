const getAllPost = async (req, res) =>{
    try {
        return res.json({
            msg: 'getting all the post'
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllPost;