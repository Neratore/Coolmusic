import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLxmzQAMYTO_282b9wfDBNwGGyotCF-Za-"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
