import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/12/08/b8578ed5bab320c432c36ec014b0d061_original.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pehalgam</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.historyhit.com/app/uploads/2020/11/Kanyakumari.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kanyakumari</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://th-thumbnailer.cdn-si-edu.com/jzm3Sdi-A4nHAwY_q8LAoOVMKJc=/1072x720/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Agra</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;