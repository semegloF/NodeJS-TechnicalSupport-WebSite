const express = require ('express') // en récupère le module express que nous avons installé graçe a (npm install express)
const app = express()// utilisation de ce module pour la création du serveur réferencer dans la VAR = app

app.set('views','./views'); //définir le dossier pour les views
app.set('view engine', 'ejs'); //définir ejs comme outil pour utiliser les views
app.use('/public',express.static('public')); //permet l'utilisation de fichiers statiques dans public

app.get('/PageProcedurier',(req , res)=> {
    res.render('PageProcedurier');
});
app.get('/PageDepannage',(req , res)=> {
    res.render('PageDepannage');
});
app.get('/nodetuto',(req , res)=> {
    res.render('nodetuto');
});

app.get('/Depannage1',(req , res)=> {
    res.render('Depannage1');
});


app.get ('/',(req , res)=>{ //req demande la page web
    const nom =req.params.nom;
    res.render('index', {userName: nom});
});

app.listen (3015,()=>{ //le serveur attend les requete sur le port 3000
    console.log ("j'écoute le port 3015 !");
});
//3015 mon port