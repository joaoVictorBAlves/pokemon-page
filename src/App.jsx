import {
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import NavbarMUI from "./components/NavbarMUI";
import CardMUI from "./components/CardMUI";
import TableMUI from "./components/TableMUI";
import ChartMUI from "./components/ChartMUI";

const App = () => {
  function generatePokemonImages() {
    const images = [];
    for (let i = 100; i <= 1025; i++) {
      const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${i}.png`;
      images.push({ img: imageUrl });
    }
    return images;
  }

  const images = generatePokemonImages();

  const cards = [
    {
      title: "Trainer",
      img: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/03/27/pokemon-ash-pikachu-capa-1hbirpgndicl1.jpg",
      paragraph:
        "Pokémon Trainer is the term commonly used for a person who catches, occasionally names, and trains several different kinds and types of Pokémon. The starter Pokémon that Pokémon Trainers receive depends on what town they live in and which region they live in.",
    },
    {
      title: "Caretaker",
      img: "data:image/jpeg;base64,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",
      paragraph:
        "Some people prefer to take care of Pokémon, observing their health, friendship levels, and happiness. There aren't major tournaments where Pokémon breeders participate, but some of them gather to take part in small competitions, such as beauty contests and the like. Some specialize in massages, others in haircuts; some take care of eggs that are about to hatch, and a good portion of them possess knowledge about the proper nutrition for each Pokémon.",
    },
  ];

  return (
    <div className="App">
      <NavbarMUI />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" sx={{ my: 2 }}>
          Bem-Vindo ao Universo dos Pokémon!
        </Typography>
        <Typography variant="h5" component="h2" sx={{ my: 1 }}>
          Pronto para a aventura?
        </Typography>
        <Typography variant="body1" component="p" sx={{ my: 1 }}>
          Descubra uma variedade de criaturas fascinantes, desde os adoráveis e
          icônicos Pikachu e Eevee até os poderosos lendários como Mewtwo e
          Lugia. Aventure-se por diversas regiões, desafie Ginásios, e embarque
          em jornadas épicas para se tornar o melhor Treinador Pokémon que já
          existiu!
        </Typography>
        <Typography variant="h4" component="h2" sx={{ my: 1 }}>
          Conheça todos os pokemos
        </Typography>
        <ImageList
          sx={{ width: 500 * 1.8, height: 440 }}
          cols={4}
          rowHeight={220}
          style={{ border: "2px solid green" }}
        >
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h4" component="h2" sx={{ my: 1 }}>
          Escolha o seu caminho?
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {cards.map((card) => (
            <CardMUI
              img={card.img}
              paragraph={card.paragraph}
              title={card.title}
            />
          ))}
        </div>
        <Divider sx={{ my: 4 }} />
        <TableMUI />
        <Divider sx={{ my: 4 }} />
        <ChartMUI />
      </Container>
    </div>
  );
};

export default App;
