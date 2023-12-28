import React from "react";
import ArticleOne from "../assets/article_one.jpg";
import ArticleTwo from "../assets/article_two.jpg";
import ArticleThree from "../assets/article_three.jpg";

const Article = ({ title, imageSrc, content, date, creator }) => (
    <div className="w-3/12 rounded-2xl flex flex-col shadow-xl bg-stone-100">
        <img className="mb-2 rounded-t-2xl" src={imageSrc} alt="article_one" />
        <div className="m-2">
            <p className="text-lg font-semibold mb-1">{title}</p>
            <p className="mb-2">{content}</p>
            <p className="mb-2">{date}</p>

            <p className="font-semibold mb-6 inline-block mr-2">Created By:</p>
            <p className="inline-block">{creator}</p>
            <button className="w-28 p-2 block bg-blue-500 text-white border-transparent rounded-lg">
                Read more
            </button>
        </div>
    </div>
);

function ArticleContainer() {
    const articles = [
        {
            title: "Title1",
            imageSrc: ArticleOne,
            content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quae.",
            date: "Date1",
            creator: "XYZ",
        },
        {
            title: "Title2",
            imageSrc: ArticleTwo,
            content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quae.",
            date: "Date2",
            creator: "XYZ",
        },
        {
            title: "Title3",
            imageSrc: ArticleThree,
            content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quae.",
            date: "Date3",
            creator: "XYZ",
        },
    ];

    return (
        <div>
            <div className="w-full">
                <div className=" flex flex-row justify-center align-center gap-28 p-8">
                    {articles.map((article, index) => (
                        <Article key={index} {...article} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArticleContainer;
