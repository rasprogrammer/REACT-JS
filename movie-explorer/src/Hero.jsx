export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="text">
          <h2>Hand-picked movies. Explore, filter, preview.</h2>
          <p className="muted">
            Use the genre pills above to focus. Click a card's "Details" to open
            a cinematic preview (CSS modal).
          </p>
        </div>
        <div className="stats muted">
          <div style={{textAlign:"right"}}>
            <div style={{fontWeight:700,fontSize:"20px"}}>42+</div>
            <div style={{fontSize:"12px"}}>Movies curated</div>
          </div>
        </div>
      </section>
    </>
  );
}
