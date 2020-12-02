const videoList = [
    {
      id: "Msyt2e3eswT",
      views: 130,
      title: "Primeiros passos com JS",
    },
  
    {
      id: "pMw3ww86wteop",
      views: 7895,
      title: "Entendo Objetos e Array em JS",
    },
  
    {
      id: "vTm75sc65styyjw",
      views: 130,
      title: "Aprendendo Node JS",
    },
  ];
  
  const viewsQuantity = videoList.filter((value) => {
    if (value.id === "pMw3ww86wteop") {
      return value;
    }
  });
  
  console.log("quantidade de visualizações videos", viewsQuantity);