import React from "react";
import ABImage from "../assets/about_img.jpg";

function AboutUs() {
    return (
        <div>
            <div className="w-full">
                <div className="grid grid-cols-2">
                    <img
                        className="aspect-square object-cover"
                        src={ABImage}
                        alt=""
                    />
                    <div className=" flex flex-col justify-center align-center px-28">
                        <h2 className="text-3xl uppercase text-center font-medium p-2">
                            About Us
                        </h2>
                        <div className="border-b border-black border-4 rounded-lg mx-auto w-16 mb-6"></div>
                        <p className="text-lg p-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat optio odio molestiae voluptas amet
                            perspiciatis totam tenetur aut delectus atque, sequi
                            non hic ea distinctio laboriosam, iusto culpa minus
                            voluptate. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Tempora soluta impedit voluptatum,
                            dicta facilis numquam sequi, autem est fugit
                            necessitatibus ipsa nemo perspiciatis facere
                            exercitationem nesciunt suscipit. Harum, recusandae
                            aliquam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
