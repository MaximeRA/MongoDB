Abdelouahed Maxime

git clone https://github.com/MaximeRA/MongoDB

```bash
Use maxproject

db.createCollection("item")
db.createCollection("user")
db.createCollection("cart")

db.user.insert ({ nom: "Abdel", prenom: "Max", num: 0626201227, login: "max", password: "lol1245", adresse: "54 avenue Aristide Briand 13100 Aix"})

db.item.insert({ _id: 1, title: "I7 7800k", marque: "Intel", category: "Processeur", price: 150, stock: 10 })
db.item.insert({ _id: 2, title: "I7 7700k", marque: "Intel", category: "Processeur", price: 200, stock: 10 })
db.item.insert({ _id: 3, title: "GTX 1050", marque: "NVIDIA", category: "Carte Graphique", price: 250, stock: 10 })
db.item.insert({ _id: 4, title: "GTX 1080", marque: "Gigabyte", category: "Carte Graphique", price: 450, stock: 10 })
db.item.insert({ _id: 5, title: "Z370-A PRO", marque: "MSI", category: "Carte Mère", price: 100, stock: 10 })
db.item.insert({ _id: 6, title: "B360 AORUS", marque: "Gigabyte", category: "Carte Mère", price: 100, stock: 10 })
db.item.insert({ _id: 7, title: "MX500 500Go", marque: "Crucial", category: "Disque SSD", price: 150, stock: 10 })
db.item.insert({ _id: 8, title: "Force MP500 960Go", marque: "Corsair", category: "Disque SSD", price: 400, stock: 10 })
db.item.insert({ _id: 9, title: "Value Select DDR4 16Go", marque: "Corsair", category: "RAM", price: 200, stock: 10 })
db.item.insert({ _id: 10, title: "Fortis Series DDR4 32Go", marque: "G.Skill", category: "RAM", price: 400, stock: 10 })

```

```bash
npm install
```

```bash
npm start
```
