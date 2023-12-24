import heroImage from "../assets/heroimage.jpg";

export default function Home() {
  return (
    <div id="home" className="flex flex-col flex-1 w-screen">
      <div className="">
        <div
          style={{
            background: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center", // Center the background image
            display: "flex",
            flex: 1,
            minHeight: "600px", // You can adjust this value based on your design
            alignItems: "center",
          }}
          className="w-screen"
        >
          <div className="flex flex-1 justify-center flex-col">
            <p
              className="text-5xl lg:text-7xl text-amber-300 text-center"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 1000 }}
            >
              Maguva Healthy Foods
            </p>
            <p
              className="text-xl lg:text-2xl text-amber-200 text-center"
              style={{ fontFamily: "Nunito, sans-serif", fontWeight: 600 }}
            >
              Homemade masala powders<subscript>®</subscript>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
