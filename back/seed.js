const { Propiedades, Categoria, Users } = require("./models/index");

Promise.all([
Categoria.create({ name: "Departamento" }),
Categoria.create({ name: "Casa" }),
Categoria.create({ name: "Ph" }),
Categoria.create({ name: "Compra" }),
Categoria.create({ name: "Alquilar" }),
Propiedades.create({
  nombre: "Sanchez de Bustamante 2239",
  descripcion: "Lindo departamento dos ambientes",
  precio: 20,
  ubicacion: "Recoleta",
  imagen: [
    "https://a0.muscache.com/im/pictures/c3e66353-7785-4de2-891a-51075a96955e.jpg?aki_policy=xx_large"
  ],
  disponible: true
}),

Propiedades.create({
  nombre: "Billinghurts 2328",
  descripcion: "Lindo departamento tres ambientes",
  precio: 40,
  ubicacion: "Recoleta",
  imagen: [
    "https://a0.muscache.com/im/pictures/be294b72-82e9-450d-b866-bbfc354e81e1.jpg?aki_policy=xx_large"
  ],
  disponible: false
}),

Propiedades.create({
  nombre: "Av 9 de Julio 1000",
  descripcion:
    "Descubrí tu hogar en Buenos Aires en este espacio acogedor y de carácter único. Explorá los puntos turísticos mas sobresalientes de la ciudad aprovechando de su ubicacion central en la mejor ciudad del mundo.",
  precio: 30,
  ubicacion: "San Nicolas",
  imagen: [
    "https://a0.muscache.com/im/pictures/52ae14ea-9a73-4912-aa17-f5ca5429e5d4.jpg?aki_policy=xx_large"
  ],
  disponible: true
}),
Propiedades.create({
  nombre: "Fitz Roy 2050",
  descripcion:
    "Apartamento nuevo (2019), luminoso y con detalles de diseño. Se destaca su inmejorable ubicacion. Rodeado de foros gastronómicos y culturales, con todos los medios de transporte (Subte., trenes y buses). Equipado con Internet alta velocidad , Smart TV. 50 pulgadas , aire acondicionado frío / calor, heladera, microondas, horno y hornallas eléctricas, tostadora, cafetera, ropa de cama y toallas. Además te esperamos con un mate, café y té para que puedas disfrutar de una estadía placentera.",
  precio: 25,
  ubicacion: "Palermo",
  imagen: [
    "https://a0.muscache.com/im/pictures/c7ee1431-4415-458c-9e06-d1c191f4fe66.jpg?aki_policy=xx_large"
  ],
  disponible: true
}),
Propiedades.create({
  nombre: "Valley Suites® - Enjoy The View",
  descripcion:
    "Apartamento nuevo (2019), luminoso y con detalles de diseño. Se destaca su inmejorable ubicacion. Rodeado de foros gastronómicos y culturales, con todos los medios de transporte (Subte., trenes y buses). Equipado con Internet alta velocidad , Smart TV. 50 pulgadas , aire acondicionado frío / calor, heladera, microondas, horno y hornallas eléctricas, tostadora, cafetera, ropa de cama y toallas. Además te esperamos con un mate, café y té para que puedas disfrutar de una estadía placentera.",
  precio: 18,
  ubicacion: "Salta, Argentina",
  imagen: [
    "https://a0.muscache.com/im/pictures/964fc0c7-3633-4202-a834-60848ceda2df.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/a58d17a8-3d6c-42b2-9658-de1781988e27.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/25af092c-a507-4143-877a-3172ae130a0c.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/8acc9aab-091d-4fff-ba67-c486aa0d31cd.jpg?aki_policy=xx_large"
  ],
  disponible: true
}),
Propiedades.create({ 
  nombre: "Cabaña grande, vista al lago Huala Hue Bariloche",
  descripcion:
    "Es, con todos los medios de transporte (Subte., trenes y buses). Equipado con Internet alta velocidad , Smart TV. 50 pulgadas , aire acondicionado frío / calor, heladera, microondas, horno y hornallas eléctricas, tostadora, cafetera, ropa de cama y toallas. Además te esperamos con un mate, café y té para que puedas disfrutar de una estadía placentera.",
  precio: 15,
  ubicacion: "Bariloche, Rio Negro",
  imagen: [
    "https://a0.muscache.com/im/pictures/ff13b386-a52a-4e38-a1c6-716060bd769f.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/14e438b0-5e01-443b-97da-fbd8e4fd60ae.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/960f7056-80f9-47b7-8ea9-3fccb0a9e14d.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/795a42c4-2989-4f71-a817-81d2c6764fd9.jpg?aki_policy=xx_large"
  ],
  disponible: true
}),
Propiedades.create({ 
  nombre: "Haikén Ushuaia",
  descripcion:
    "Mono ambiente a estrenar muy luminoso con una excelente vista a la Montaña y especial para el turismo. Contactanos.",
  precio: 25,
  ubicacion: "Tierra del Fuego",
  imagen: [
    "https://a0.muscache.com/im/pictures/9efe90aa-59da-4fbc-b80e-8537c33108b5.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/dac01fff-7ff8-48d8-a6a4-96a072a7bd90.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/00e8cb6a-e8f2-41ed-8e54-1b8e5fe350df.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/32fe27fe-471e-4010-a7fb-0e51d821e319.jpg?aki_policy=xx_large"
  ],
  disponible: true
}),
Propiedades.create({
  nombre: "El Apapacho - Cálida y cómoda casa en Cariló.",
  descripcion:
    "La casa se encuentra a 7 cuadras del balneario Hemingway y a 7 del centro comercial, sobre una cuadra muy tranquila y sin tráfico. Fue diseñada buscando comodidad y calidez para disfrutar lindos momentos con amigos o en familia. Tiene 4 dormitorios, 3 de ellos en suite. La cocina y el living comedor están integrados y tienen un amplio ventanal para disfrutar de una lindísima vista al jardín. Su cómodo deck cuenta con parrilla, ideal para disfrutar de un rico asado o desayunar por las mañanas.",
  precio: 90,
  ubicacion: "Carilo, Buenos Aires Provincia",
  imagen: [
    "https://a0.muscache.com/im/pictures/5b41b52e-2cce-4425-ba4b-3fae2a6ab821.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/673e3d69-9a66-41f8-9c77-5d9267236e94.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/cd3515e8-738f-4ce4-898b-ac68035e7319.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/52b8f36a-d102-4e46-be5e-1704c242c535.jpg?aki_policy=xx_large"
  ],
  disponible: true
}),
Propiedades.create({  
  nombre: "Departamento Alvear - Pleno centro de la ciudad",
  descripcion:
    "Apartamento nuevo (2019), luminoso y con detalles de diseño. Se destaca su inmejorable ubicacion. Rodeado de foros gastronómicos y culturales, con todos los medios de transporte (Subte., trenes y buses). Equipado con Internet alta velocidad , Smart TV. 50 pulgadas , aire acondicionado frío / calor, heladera, microondas, horno y hornallas eléctricas, tostadora, cafetera, ropa de cama y toallas. Además te esperamos con un mate, café y té para que puedas disfrutar de una estadía placentera.",
  precio: 25,
  ubicacion: "Cordoba, Argentina",
  imagen: [
    "https://a0.muscache.com/im/pictures/a4f71509-cc19-4b50-bb09-bb64e0062d47.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/4cff9ad8-d7ca-48d6-8eeb-70b125be7334.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/03c617c1-f712-4cd9-9464-d468033cde5e.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/bb3d12b3-c0ef-49fb-9fa7-65285a089cef.jpg?aki_policy=xx_large"
  ],
  disponible: true
}),
Propiedades.create({
  nombre: "Benjamin- 200m Pza España",
  descripcion:
    "El Living es un espacio armonioso y tranquilo para disfrutar de compañía con unos mates o cualquier otra infusión. En él encontrará un sofá-cama para dos personas de dos plazas y un espacio donde podrá averiguar sobre actividades a realizar.",
  precio: 18,
  ubicacion: "Palermo, Buenos Aires",
  imagen: [
    "https://a0.muscache.com/im/pictures/89f2ca2a-e3d9-4631-8e57-759503d9e5b0.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/595a1305-2b25-47ca-84de-e4ed17fdf505.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/87cead78-4337-413e-b698-0650cf4375ff.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/2bc8a07a-5f34-46bc-814d-5ae18166756e.jpg?aki_policy=xx_large",
    "https://a0.muscache.com/im/pictures/f8b7de5f-6b4c-4a56-a1b6-5c0fb7ffbca5.jpg?aki_policy=xx_large"
  ],
  disponible: true
})]).then(([departamento, casa, ph, compra, alquilar, depto1, depto2, depto3, depto4, depto5, casa1, depto6, casa2, depto7, depto8]) => { 
  depto1.addCategoria(departamento) && depto1.addCategoria(alquilar);
  depto2.addCategoria(departamento) && depto2.addCategoria(alquilar);
  depto3.addCategoria(departamento) && depto3.addCategoria(alquilar);
  depto4.addCategoria(departamento) && depto4.addCategoria(alquilar);
  depto5.addCategoria(departamento) && depto5.addCategoria(alquilar);
  casa1.addCategoria(casa) && casa1.addCategoria(compra);
  depto6.addCategoria(departamento) && depto6.addCategoria(alquilar);
  casa2.addCategoria(casa) && casa2.addCategoria(alquilar);
  depto7.addCategoria(departamento) && depto7.addCategoria(compra);
  depto8.addCategoria(departamento) && depto8.addCategoria(alquilar);
 })

Users.create({
  username: "Renato",
  email: "renatoyanez95@gmail.com",
  password: "123",
  admin: true
}).then((user) => {
  console.log("USER DATA TRIAL", {
  username: user.username,
  email: user.email,
  password: user.password,
  admin: user.admin
  });
})