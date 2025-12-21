import React from "react";

const TutorialPage = async ({ params }) => {
    const {slug} = await params;
    console.log(slug);
    const [technology, page] = slug || [];
    console.log(technology);
    return <div>This is {technology} page. U can learn {page} here.</div>;
};

export default TutorialPage;
