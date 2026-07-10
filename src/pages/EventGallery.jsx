import { useParams } from "react-router-dom";

function EventGallery() {
  const { id } = useParams();

  const galleries = {
    "esala-perahera-2026":
      "https://photos.app.goo.gl/YOUR_GOOGLE_PHOTOS_LINK",

    "school-awards-2026":
      "https://photos.app.goo.gl/YOUR_GOOGLE_PHOTOS_LINK",

    "birthday-party":
      "https://photos.app.goo.gl/YOUR_GOOGLE_PHOTOS_LINK",
  };

  const url = galleries[id];

  if (url) {
    window.location.replace(url);
    return null;
  }

  return (
    <section className="section">
      <div className="container text-center">
        <h1>Gallery Not Found</h1>
        <p>This event gallery doesn't exist.</p>
      </div>
    </section>
  );
}

export default EventGallery;