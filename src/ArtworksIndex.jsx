export function ArtworksIndex(props) {
  return (
    <div>
      <h1>All Artwork</h1>
      {props.artworks.map((artwork) => (
        <div key={artwork.id}>
          <h3>{artwork.name}</h3>
          <p>${artwork.price}</p>
          <img src={artwork.image} />
          <p>{artwork.description}</p>

        </div>

      
      ))}

    </div>
  );
}