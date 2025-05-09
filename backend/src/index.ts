import app from './app';


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
   // console.log("FOO is:", process.env.FOO);


});
