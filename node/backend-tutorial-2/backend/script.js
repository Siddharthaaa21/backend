import expess from 'express';
import dotenv from 'dotenv';
 
const app =expess();  
const port = process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send('Hello World!')
}
)

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
}
)
app.get('/api/jokes', (req,res)=>
{
    const jokes=[
        {
            question: 'Why did the chicken cross the road?',
            answer: 'To get to the other side'
        },
        {
            question: 'What do you get when you cross a snowman and a vampire?',
            answer: 'Frostbite'
        },
        {
            question: 'What do you call a bear with no teeth?',
            answer: 'A gummy bear'
        },
        {
            question: 'What do you call cheese that isn\'t yours?',
            answer: 'Nacho cheese'
        },
        {
            question: 'What do you call a pile of cats?',
            answer: 'A meowtain'
        }
    ]
    res.json(jokes)
})
