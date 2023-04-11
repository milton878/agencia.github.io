const autos = [
	{
		img:"https://http2.mlstatic.com/D_NQ_NP_971024-MLA48863006673_012022-O.webp",
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2020,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico',
		
		
	},
	{ 	
		img:"https://http2.mlstatic.com/D_NQ_NP_954080-MLA51389238687_092022-W.webp",
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2020, 
        precio: 40000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		img:"https://i.ytimg.com/vi/JzfgpiLxtNQ/maxresdefault.jpg",
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
		img:"https://cloud.leparking.fr/2021/09/13/00/11/audi-a6-2020-audi-a6-45-tfsi-quattro-black-edition-4dr-s-tronic-auto-saloon-petrol-autom-gris_8270314068.jpg",
        marca: 'Audi', 
        modelo: 'A6', 
        year: 2020, 
        precio: 35000, 
        puertas: 4, 
        color: 'Negro', 
        transmision: 'automatico' 
    },
	{
		img:"https://www.autobild.es/sites/autobild.es/public/styles/480x272/public/dc/fotos/BMW_M5_002.jpg?itok=HNrU5xlw",
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		img:"https://i.ytimg.com/vi/UmYueHB0Kxk/hqdefault.jpg",
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		img:"https://soymotor.com/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/imagenes/noticia/2015-sema-chevrolet-camaro-ss-black-accent-026.jpg",
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ 
		img:"https://cdn.motor1.com/images/mgl/MEgEX/s3/liberty-walk-ford-mustang.jpg",
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2019, 
        precio: 80000, 
        puertas: 2, 
        color: 'Rojo', 
        transmision: 'manual' 
    },
	{
		img:"https://img-us-2.trovit.com/img2mx/v1LURQ1y1514/v1LURQ1y1514.1_11.jpg",
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
		img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnohIsYSZ8AuYLnfnja1DATwumFQVg5iStpw&usqp=CAU",
        marca: 'Audi', 
        modelo: 'A3', 
        year: 2017, 
        precio: 55000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 
        'manual' 
    },
	{
		img:"https://besthqwallpapers.com/Uploads/7-4-2020/127710/thumb2-dodge-charger-srt-demon-red-sports-coupe-race-car-tuning-charger-srt-american-sports-cars.jpg",
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2020,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		img:"https://besthqwallpapers.com/Uploads/28-8-2016/4548/thumb2-amg-2016-mercedes-benz-c-class-blue.jpg",
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		img:"https://acnews.blob.core.windows.net/imgnews/medium/NAZ_6b18bc2b6ad9441ba6ecf68989def736.jpg",
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
		img:"https://i.pinimg.com/originals/e9/c7/75/e9c775af18eca9a3b411cebafb92803a.jpg",
        marca: 'Ford', 
        modelo: 'Mustang', 
        year: 2017, 
        precio: 60000, 
        puertas: 2, 
        color: 'Negro', 
        transmision: 'manual' 
    },
	{
		img:"https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2014/04/334255-dodge-challenger-2015.jpg?itok=oSMZwSIw",
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		img:"https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2018/11/5-secretos-bmw-serie-3-2019.jpg",
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		img:"https://http2.mlstatic.com/D_NQ_NP_855517-MLA51258135265_082022-W.jpg",
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		img:"https://noticias.coches.com/wp-content/uploads/2021/07/Mercedes-Clase-C-C200-prueba-15.jpeg",
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ 
		img:"https://www.diariomotor.com/imagenes/picscache/1440x655c/audi-a4-2018-08_1440x655c.jpg",
        marca: 'Audi', 
        modelo: 'A4', 
        year: 2016, 
        precio: 30000, 
        puertas: 4, 
        color: 'Azul', 
        transmision: 'automatico' 
    }
];
