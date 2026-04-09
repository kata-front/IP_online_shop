const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let users = [];
let orders = [];
let products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 129990,
        image: "/api/placeholder/200/200",
        category: "Смартфоны",
        description: "Смартфон"
    },
    {
        id: 2,
        name: "MacBook Air M2",
        price: 119990,
        image: "/api/placeholder/200/200",
        category: "Ноутбуки",
        description: "Ноутбук"
    },
    {
        id: 3,
        name: "iPad Pro 12.9",
        price: 99990,
        image: "/api/placeholder/200/200",
        category: "Планшеты",
        description: "Планшет"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 89990,
        image: "/api/placeholder/200/200",
        category: "Смартфоны",
        description: "Смартфон"
    },
    {
        id: 5,
        name: "Dell XPS 13",
        price: 109990,
        image: "/api/placeholder/200/200",
        category: "Ноутбуки",
        description: "Ноутбук"
    },
    {
        id: 6,
        name: "AirPods Pro",
        price: 24990,
        image: "/api/placeholder/200/200",
        category: "Аудиотехника",
        description: "Наушники"
    }
]


app.post('/register', (req, res) => {
    const {name, lastName, email, password, phone, birthDate} = req.body;

    if (!name || !lastName || !email || !password || !phone || !birthDate) {
        return res.status(400).json({ok: false, error: 'Все поля обязательны'});
    }

    if (password.length < 8) {
        return res.status(400).json({ok: false, error: 'Пароль должен содержать минимум 8 символов'});
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ok: false, error: 'Пользователь с таким email уже существует'});
    }

    const token = 'token_' + Math.random().toString(36).substr(2, 9);

    const newUser = {
        id: users.length + 1,
        name,
        lastName,
        email,
        password,
        phone,
        birthDate,
        createdAt: new Date().toISOString(),
        cart: [],
        token: token,
    };

    users.push(newUser);

    res.json({ok: true, token});
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ok: false, error: 'Email и пароль обязательны'});
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ok: false, error: 'Неверный email или пароль'});
    }

    const token = user.token
    res.json({ok: true, token});
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/add/:token', (req, res) => {
    const token = req.params.token

    const product = products.find((product) => req.body.productId === product.id)

    if (product) {
        users.find(u => u.token === token).cart.push(product)
    }

    console.log(users)
    res.status(200).json({ok: true, product});
})

app.get('/cart/:token', (req, res) => {
    const token = req.params.token
    const cart = users.find(u => u.token === token).cart
    res.json({ok: true, cart})
})

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});