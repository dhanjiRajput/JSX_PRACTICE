import Title from "./Title";
import Description from "./Description";
import Price from "./Price";
import "./Box.css";
const Box = () => {
  return (
    <>
      <div id="box">
        <Title title="Logitech Mx Master" />
        <img src="https://media.croma.com/image/upload/v1681404219/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/258454_0_rmm57f.png"></img>
        <Description text1="800 DPI" text2="5 Programmble Buttons" />
        <Price old="12,495" newer="8,999" />
      </div>
      <div id="box">
        <Title title="Apple Pencil (2nd Gen)" />
        <img src="https://img-prd-pim.poorvika.com/product/apple-pencil-2nd-gen-white-mu8f2hn-a-front-view.png"></img>
        <Description
          text1="Intutive Touch Surface"
          text2="Designed Paid iPad Pro"
        />
        <Price old="11,900" newer="9199" />
      </div>
      <div id="box">
        <Title title="Zebronics" />
        <img src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Zebronics-transformer-1-wired-keyboard-and-mouse-combo-black-1.png"></img>
        <Description
          text1="Designed Paid iPad Pro"
          text2="Intutive Touch Surface"
        />
        <Price old="1599" newer="999" />
      </div>
      <div id="box">
        <Title title="Petronics Toad" />
        <img src="https://techcommerce.in/wp-content/uploads/2023/05/2-25-250x250.webp"></img>
        <Description text1="Wireless Mouse 2.4Gz" text2="Optical Orientation" />
        <Price old="599" newer="278" />
      </div>
    </>
  );
};

export default Box;
