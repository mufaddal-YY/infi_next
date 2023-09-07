import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
        <script
          async
          src="https://kit.fontawesome.com/0cd2d10be4.js"
          crossorigin="anonymous"></script>

        <title>Infispark - Contact</title>
        <meta
          name="description"
          content="Infispark is founded solely for the purpose of uplifting women and empowering them to advance in IT skills, thereby becoming more tech-savvy and future-ready. We’re bridging the gap between the deserving candidates and some of the finest recruiters in the business."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="section-container section-sp4 bg-white">
        <div className="container">
          <div>
            <iframe
              className="stylecontact"
              src="https://forms.monday.com/forms/embed/66837dd0cc63b6e305e7746bacb5d66e?r=use1"
              width="100%"
              height="1080"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
