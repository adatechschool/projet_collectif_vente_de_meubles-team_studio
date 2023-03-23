
function checksession(req,res,next){
     if (!req.session || !req.session.cookie) {
      const err = new Error('No Authentication')
      //console.log(err)
      res.send({ message: "Session not found" });
      next(err);
  }
  next();
}

module.exports = checksession;