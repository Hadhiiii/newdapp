import { Router } from 'express';  
const router = Router();

router.get('/',(req, res) => {
    res.send('hello world!')
})
const greetingsList = [
    'hello world',
    'entha paad',
    'bonjour',
    'entha vishesham',
];
 
router.get('/greetings',async (req,res) => {
    res.json(greetingsList)
})

router.get('/visitors',async (req,res) => {
    const visitorCount = Math.floor(math.random() * 1000);
    res.json(visitorCount)
})

export default router; 