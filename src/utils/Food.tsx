const breakfast = [
  {
    id: 1,
    name: "Desayuno completo",
    description:
      "1 Huevos revueltos + 1 Chocolate + 1 Sopa + 1 Arepa + 1 Arroz",
    price: 15900,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbp7vepfahbapmsxvjkpgta%2F1746296690_img_1.webp?st=2025-05-03T17%3A00%3A22Z&se=2025-05-09T18%3A00%3A22Z&sks=b&skt=2025-05-03T17%3A00%3A22Z&ske=2025-05-09T18%3A00%3A22Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=OE8ueQWjwMdN0aVIObSxOdOJiUzZgwyUqrMxq%2FeTj%2Bc%3D&az=oaivgprodscus",
  },
  {
    id: 2,
    name: "Desayuno completo",
    description:
      "1 Jugo de Naranja + 1 Caldo de Costilla + 1 Huevos rancheros + 2 Panes + 1 Arroz",
    price: 15900,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbqnx62ed59t4p39zeyaf2y%2F1746298201_img_0.webp?st=2025-05-03T17%3A02%3A24Z&se=2025-05-09T18%3A02%3A24Z&sks=b&skt=2025-05-03T17%3A02%3A24Z&ske=2025-05-09T18%3A02%3A24Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=M2X6nDBUuDNkEtvFb%2Ff2eeIm0ftibxRqWp7xFXIvulg%3D&az=oaivgprodscus",
  },
  {
    id: 3,
    name: "Huevos",
    description: "Revuelto, Fritos, Cocidos, Rancheros, Pericos.",
    price: 2000,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbqsjjdekv9tbqnw1zjc2z1%2F1746298321_img_0.webp?st=2025-05-03T17%3A02%3A24Z&se=2025-05-09T18%3A02%3A24Z&sks=b&skt=2025-05-03T17%3A02%3A24Z&ske=2025-05-09T18%3A02%3A24Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ntVjz%2F9W%2BNA%2BLm9X%2FIFKSTlPhyU2NUGhy3WLAuGfD0U%3D&az=oaivgprodscus",
  },
  {
    id: 4,
    name: "Sopas",
    description: "Sopa de pasta, Caldo de costilla, Sopa de pescado.",
    price: 5000,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbqwvz7fs19pz7twhz7h8q8%2F1746298426_img_0.webp?st=2025-05-03T17%3A00%3A22Z&se=2025-05-09T18%3A00%3A22Z&sks=b&skt=2025-05-03T17%3A00%3A22Z&ske=2025-05-09T18%3A00%3A22Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=w%2BHuxBQUlkqMpY0j7m8CGvAPjJuEGvqxb3ySV3VsRxA%3D&az=oaivgprodscus",
  },
  {
    id: 5,
    name: "Jugos",
    description: "Jugo de Naranja, Jugo de Mandarina, Jugo de Piña.",
    price: 4000,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbr2as6ej9sppsdw15b27yr%2F1746298594_img_0.webp?st=2025-05-03T17%3A02%3A35Z&se=2025-05-09T18%3A02%3A35Z&sks=b&skt=2025-05-03T17%3A02%3A35Z&ske=2025-05-09T18%3A02%3A35Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=qtnIijSS1D%2FKV8UWiG%2F7O2G9P%2Frf%2BPUhqiOM0Yzy%2BeY%3D&az=oaivgprodscus",
  },
  {
    id: 6,
    name: "Arroz",
    description: "Taza de Arroz",
    price: 3500,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbr7dqhed59m8tn4xr1gnfd%2F1746298767_img_1.webp?st=2025-05-03T17%3A56%3A29Z&se=2025-05-09T18%3A56%3A29Z&sks=b&skt=2025-05-03T17%3A56%3A29Z&ske=2025-05-09T18%3A56%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=QOuJkTjLjKSEFpd5s%2B5ovkx%2BrFwzKIFheNPtyol%2BffY%3D&az=oaivgprodscus",
  },
];
const lunch = [
  {
    id: 1,
    name: "Frijolada",
    description:
      "1 Limonada + Frijoles + Arroz + Carne molida + 1 Aguacate tajado + Chicarrón + Arroz con leche",
    price: 235000,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbrb7c7e92vfg3vkf5dzjew%2F1746298899_img_0.webp?st=2025-05-03T17%3A54%3A55Z&se=2025-05-09T18%3A54%3A55Z&sks=b&skt=2025-05-03T17%3A54%3A55Z&ske=2025-05-09T18%3A54%3A55Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=uVTplilqf7FMOGN6gs9MTuABMIYpDxBIgNAtSyAxluk%3D&az=oaivgprodscus",
  },
  {
    id: 2,
    name: "Lasaña",
    description: "1 Limonada + Lasaña",
    price: 19900,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbrh1fxecj966hm7zk4ccje%2F1746299082_img_0.webp?st=2025-05-03T17%3A57%3A17Z&se=2025-05-09T18%3A57%3A17Z&sks=b&skt=2025-05-03T17%3A57%3A17Z&ske=2025-05-09T18%3A57%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=9GlWiC3PxVIO3z9spn0sA6FbJ2fLFFo93Fj7qx9sgCA%3D&az=oaivgprodscus",
  },
  {
    id: 3,
    name: "Mojarra frita",
    description:
      "1 Limonada + Mojarra frita + Arroz + Ensalada + Platano maduro",
    price: 19900,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbrmjk8e7grc3h29kfhtcne%2F1746299207_img_1.webp?st=2025-05-03T17%3A57%3A49Z&se=2025-05-09T18%3A57%3A49Z&sks=b&skt=2025-05-03T17%3A57%3A49Z&ske=2025-05-09T18%3A57%3A49Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=txVMMl4k7dcv3iEu7zCBccVxvjbZwqi4r%2BcRHSxRv9g%3D&az=oaivgprodscus",
  },
  {
    id: 4,
    name: "Arroz con pollo",
    description: "1 Limonada + Arroz con Pollo + Ensalada + 2 Papas",
    price: 19900,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbrst1yegvrt9nsbgemyrcx%2F1746299373_img_1.webp?st=2025-05-03T17%3A56%3A29Z&se=2025-05-09T18%3A56%3A29Z&sks=b&skt=2025-05-03T17%3A56%3A29Z&ske=2025-05-09T18%3A56%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Bc0ncogGl0LJRStehp4YvMTP0oGHvYbssWz1lmKntFo%3D&az=oaivgprodscus",
  },

  {
    id: 5,
    name: "Pollo con champiñones",
    description:
      "1 Limonada + Pollo con Champiñones + Arroz + Papa frita + Ensalada",
    price: 19900,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbrzsxgfhgrcxbfe4cted14%2F1746299572_img_1.webp?st=2025-05-03T17%3A57%3A24Z&se=2025-05-09T18%3A57%3A24Z&sks=b&skt=2025-05-03T17%3A57%3A24Z&ske=2025-05-09T18%3A57%3A24Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=NGnXLqzqbws8%2FzIk0PrQg8PeG0sLTNnmVdYGGck6H%2BM%3D&az=oaivgprodscus",
  },

  {
    id: 6,
    name: "Arroz",
    description: "Taza de Arroz",
    price: 3500,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbr7dqhed59m8tn4xr1gnfd%2F1746298767_img_1.webp?st=2025-05-03T17%3A56%3A29Z&se=2025-05-09T18%3A56%3A29Z&sks=b&skt=2025-05-03T17%3A56%3A29Z&ske=2025-05-09T18%3A56%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=QOuJkTjLjKSEFpd5s%2B5ovkx%2BrFwzKIFheNPtyol%2BffY%3D&az=oaivgprodscus",
  },

  {
    id: 7,
    name: "Papas a la francesa",
    description: "Taza de 200g con papa a la francesa",
    price: 6200,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbs2t98f64t5q03fxyh5z79%2F1746299663_img_0.webp?st=2025-05-03T17%3A56%3A34Z&se=2025-05-09T18%3A56%3A34Z&sks=b&skt=2025-05-03T17%3A56%3A34Z&ske=2025-05-09T18%3A56%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Rlq8sDZ5AWq6Zvq2c%2FXyPqJfN7CqvBBYRQ7pAjh0%2FzU%3D&az=oaivgprodscus",
  },
  {
    id: 8,
    name: "Ensalada de frutas",
    description: "Banana + Papaya + Sandia + Kiwi",
    price: 5000,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbs5nthf859az9p0z445s18%2F1746299756_img_1.webp?st=2025-05-03T17%3A57%3A35Z&se=2025-05-09T18%3A57%3A35Z&sks=b&skt=2025-05-03T17%3A57%3A35Z&ske=2025-05-09T18%3A57%3A35Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=mw55hi9OzshawYTV%2BbdR1u%2FEHDL6VXmcuG%2BybtNC7zY%3D&az=oaivgprodscus",
  },
];
const bar = [
  {
    id: 1,
    name: "Coca-Cola",
    description: "Botella Coca-Cola de 500ml",
    price: 3000,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbs8f9aejfrsy5p40vj3w6t%2F1746299841_img_1.webp?st=2025-05-03T17%3A57%3A35Z&se=2025-05-09T18%3A57%3A35Z&sks=b&skt=2025-05-03T17%3A57%3A35Z&ske=2025-05-09T18%3A57%3A35Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=LxZierGT2ntZDNgJ8%2FyzUdMGlNlCbyusjT2eC6Vg8%2Fk%3D&az=oaivgprodscus",
  },
  {
    id: 2,
    name: "Lata de Cerveza",
    description: "Cerveza Poker, Aguila, Aguila Light, Andina de 330ml",
    price: 3000,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbsazspf9cbt5wspt5911p2%2F1746299931_img_1.webp?st=2025-05-03T17%3A54%3A57Z&se=2025-05-09T18%3A54%3A57Z&sks=b&skt=2025-05-03T17%3A54%3A57Z&ske=2025-05-09T18%3A54%3A57Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=cN8T491%2FeqznEFcbdD14oR1dNcFyom2doQCCxgQYAcY%3D&az=oaivgprodscus",
  },
  {
    id: 3,
    name: "Cerveza Corona",
    description: "Botella de vidrio Corona 500ml",
    price: 3000,
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbsdqvpf0rr8t3g7e8fj3g2%2F1746300016_img_1.webp?st=2025-05-03T17%3A56%3A34Z&se=2025-05-09T18%3A56%3A34Z&sks=b&skt=2025-05-03T17%3A56%3A34Z&ske=2025-05-09T18%3A56%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DctN6z1UtcSe07v9AL2pcEiN242wuFT3RbaN0Jc6dvs%3D&az=oaivgprodscus",
  },

  {
    id: 4,
    name: "Gaseosa",
    description: "Botella de gaseosa Pepsi, Cuatro, Manzana, 7up de 500ml",
    price: 3000,
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbsga6afe6s4k7vy1nwc69b%2F1746300111_img_1.webp?st=2025-05-03T17%3A56%3A34Z&se=2025-05-09T18%3A56%3A34Z&sks=b&skt=2025-05-03T17%3A56%3A34Z&ske=2025-05-09T18%3A56%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=7qfXKtguoKFsyuz6H%2BGF9NCwo2x1QJ9A50B%2FpZ3AAoU%3D&az=oaivgprodscus",
  },
  {
    id: 5,
    name: "Agua",
    description: "Botella de agua 500ml",
    price: 3000,
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbsn5eaemxt5ek8jg272ake%2F1746300263_img_3.webp?st=2025-05-03T17%3A54%3A59Z&se=2025-05-09T18%3A54%3A59Z&sks=b&skt=2025-05-03T17%3A54%3A59Z&ske=2025-05-09T18%3A54%3A59Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=jyb5CXqxQbip%2BY4WvLudTZX8SHFzbEqiUyH4mm0EC90%3D&az=oaivgprodscus",
  },
];

export { breakfast, lunch, bar };
