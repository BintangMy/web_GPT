function handelError(error, req, res, next){
   if(error.name === "notFound"){
        res.status(404).json({message:"Course not found"})
    }else{
        res.status(500).json({message:"Internal server error"})
    }
}

module.exports = {handelError}