import React from "react";
import ArticleContainer from "../components/ArticleContainer";

function Article() {
    return (
        <div className="w-full bg-slate-200">
            <div className="mx-auto p-14">
                <h2 className="text-3xl mx-auto text-center font-medium p-2">
                    Latest Articles
                </h2>
                <div className="border-b border-black border-4 rounded-lg mx-auto w-16 mb-6"></div>
                <ArticleContainer />
            </div>
        </div>
    );
}

export default Article;
