const breakfast = [
  {
    id: 1,
    name: "Desayuno completo",
    description:
      "1 Huevos revueltos + 1 Chocolate + 1 Sopa + 1 Arepa + 1 Arroz",
    price: 15900,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155893/20250503_1324_Mesa_de_Desayuno_Minimalista_remix_01jtbp7wb1e4vt26c0k85x35t2_fnypkn.png",
  },
  {
    id: 2,
    name: "Desayuno completo",
    description:
      "1 Jugo de Naranja + 1 Caldo de Costilla + 1 Huevos rancheros + 2 Panes + 1 Arroz",
    price: 15900,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155893/20250503_1350_Desayuno_Variado_con_Jugo_remix_01jtbqnyhte0asp3hs4aj1y1bv_kkg32v.png",
  },
  {
    id: 3,
    name: "Huevos",
    description: "Revuelto, Fritos, Cocidos, Rancheros, Pericos.",
    price: 2000,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155893/20250503_1352_Cinco_Platos_con_Huevo_remix_01jtbqskwef0bscm0bwsznz7f8_sdbeyh.png",
  },
  {
    id: 4,
    name: "Sopas",
    description: "Sopa de pasta, Caldo de costilla, Sopa de pescado.",
    price: 5000,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155893/20250503_1353_Variedad_de_sopas_remix_01jtbqwx2gfh7vkbp9d0terntz_u7nhz9.png",
  },
  {
    id: 5,
    name: "Jugos",
    description: "Jugo de Naranja, Jugo de Mandarina, Jugo de Piña.",
    price: 4000,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155893/20250503_1356_Tres_Jugos_Coloridos_remix_01jtbr2c7me268g6nqqrwkrp4x_wi7o8k.png",
  },
  {
    id: 6,
    name: "Arroz",
    description: "Taza de Arroz",
    price: 3500,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155894/20250503_1359_Cuenco_de_Arroz_remix_01jtbr7ee5f7dtrb5hyzp2hmfy_w2qjzm.png",
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
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155894/20250503_1401_Desayuno_Completo_Colombiano_remix_01jtbrb8jzf3n947k5wztmgara_asd5kf.png",
  },
  {
    id: 2,
    name: "Lasaña",
    description: "1 Limonada + Lasaña",
    price: 19900,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155894/20250503_1404_Lasagna_y_bebida_remix_01jtbrh2mqfss9gv2zwh6gw5g9_eirdgp.png",
  },
  {
    id: 3,
    name: "Mojarra frita",
    description:
      "1 Limonada + Mojarra frita + Arroz + Ensalada + Platano maduro",
    price: 19900,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155894/20250503_1406_Comida_con_Mojarra_Frita_remix_01jtbrmkjjfgsav27qvgvym3dk_nxkwtr.png",
  },
  {
    id: 4,
    name: "Arroz con pollo",
    description: "1 Limonada + Arroz con Pollo + Ensalada + 2 Papas",
    price: 19900,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155895/20250503_1409_Comida_Completa_Diversa_remix_01jtbrsv4se6jvqfjh4gfbx8cw_j9xbai.png",
  },

  {
    id: 5,
    name: "Pollo con champiñones",
    description:
      "1 Limonada + Pollo con Champiñones + Arroz + Papa frita + Ensalada",
    price: 19900,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155895/20250503_1411_Comida_Colorida_y_Saludable_remix_01jtbrxh9pfbbv5sfgv12bd2gr_bd5v6o.png",
  },

  {
    id: 6,
    name: "Arroz",
    description: "Taza de Arroz",
    price: 3500,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155894/20250503_1359_Cuenco_de_Arroz_remix_01jtbr7ee5f7dtrb5hyzp2hmfy_w2qjzm.png",
  },

  {
    id: 7,
    name: "Papas a la francesa",
    description: "Taza de 200g con papa a la francesa",
    price: 6200,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155895/20250503_1414_Tazo%CC%81n_de_Papas_Fritas_remix_01jtbs2vase85st3rn748yj5qb_ghmcyu.png",
  },
  {
    id: 8,
    name: "Ensalada de frutas",
    description: "Banana + Papaya + Sandia + Kiwi",
    price: 5000,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155895/20250503_1415_Ensalada_de_Frutas_remix_01jtbs5pneecpvd7gy4kjq29pc_acggio.png",
  },
];
const bar = [
  {
    id: 1,
    name: "Coca-Cola",
    description: "Botella Coca-Cola de 500ml",
    price: 3000,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155895/20250503_1417_Botella_Coca-Cola_500ml_remix_01jtbs8gmnf9bvwwgcav198f55_nhqqsb.png",
  },
  {
    id: 2,
    name: "Lata de Cerveza",
    description: "Cerveza Poker, Aguila, Aguila Light, Andina de 330ml",
    price: 3000,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155895/20250503_1418_Cerveza_Latas_Variadas_remix_01jtbsb0kdfy29c1anpz5v35bt_u1qw1e.png",
  },
  {
    id: 3,
    name: "Cerveza Corona",
    description: "Botella de vidrio Corona 500ml",
    price: 3000,
    imageUrl:
      "https://videos.openai.com/vg-assets/assets%2Ftask_01jtbsdqvpf0rr8t3g7e8fj3g2%2F1746300016_img_1.webp?st=2025-05-03T17%3A56%3A34Z&se=2025-05-09T18%3A56%3A34Z&sks=b&skt=2025-05-03T17%3A56%3A34Z&ske=2025-05-09T18%3A56%3A34Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=DctN6z1UtcSe07v9AL2pcEiN242wuFT3RbaN0Jc6dvs%3D&az=oaivgprodscus",
  },

  {
    id: 4,
    name: "Gaseosa",
    description: "Botella de gaseosa Pepsi, Cuatro, Manzana, 7up de 500ml",
    price: 3000,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155896/20250503_1421_Cuatro_Botellas_de_Gaseosa_remix_01jtbsgb72fqbt4px8kpmb26bf_aoeb0k.png",
  },
  {
    id: 5,
    name: "Agua",
    description: "Botella de agua 500ml",
    price: 3000,
    imageUrl:
      "https://res.cloudinary.com/dpbfmmscl/image/upload/v1747155098/20250503_1424_Botella_de_Agua_remix_01jtbsn6kafca917vdq1ssm68w_qprrln.png",
  },
];

export { breakfast, lunch, bar };
