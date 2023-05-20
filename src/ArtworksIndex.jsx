export function ArtworksIndex(props) {
  return (
    <div id="artworks-index" className="mt-4">
      <center>
        <h1>All Artwork</h1>
      </center>
      <div className="row">
        {props.artworks.map((artwork) => (
          <div key={artwork.id} className="col-sm-4 mb-3">
            <div className="card h-100">
              <div className="card-body card-body-custom d-flex flex-column">
                <h4 className="card-title">{artwork.name}</h4>
                <h6 className="card-price">${artwork.price}</h6>
                <img src={artwork.image} className="card-img" alt={artwork.name} />
                <p className="card-text">{artwork.description}</p>
                <div className="mt-auto text-center">
                  <button className="green-button">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
