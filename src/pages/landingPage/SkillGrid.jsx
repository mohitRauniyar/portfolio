import React from 'react'
// Example: 12×12 grid, with some cells having thick borders
const gridData = [
    // Row 0
    [
      { bottom: true, right: true}, {bottom: true}, {}, {}, {}, {right: true}, {}, {}, {}, {}, {}, {}
    ],
    [
      {bottom: true, right: true},  { bottom: true}, { bottom: true}, { bottom: true, right: true}, { bottom: true}, { bottom: true, right: true}, { bottom: true}, { bottom: true, right: true}, { bottom: true},{},{},{}
    ],
    [
      { right: true}, {}, {}, { right: true}, {}, {right: true}, {}, {right: true}, {}, {}, {}, {}
    ],
    [
      {}, {}, {}, { bottom: true, right: true}, { bottom: true}, { bottom: true, right:true}, {bottom:true}, {bottom:true}, {bottom:true}, {bottom:true}, { bottom: true, right: true}, { bottom: true}
    ],
    [
      {},     {}, {}, {right:true}, {}, {right:true}, {}, {}, {}, {}, {right:true}, {}
    ],
    [
      {}, {}, {}, {right:true}, {}, {right:true, bottom:true}, {bottom:true}, {bottom:true}, {bottom:true}, {}, {right:true}, {}
    ],
    [
      {}, {}, {}, {right:true}, {}, {right:true}, {}, {}, {}, {}, {right:true}, {}
    ],
    [
      {},     { bottom: true, right: true}, { bottom: true}, { bottom: true, right:true}, { bottom: true}, {}, {}, {}, {}, {}, {right:true}, {}
    ],
    [
      {},     {right:true}, {}, {right:true}, {}, {}, {}, {}, {}, {right:true, bottom:true}, {right:true, bottom:true}, {bottom:true}
    ],
    [
      {},     {right:true}, {}, {}, {}, {}, {}, {}, {}, {right:true}, {right:true}, {}
    ],
    [
      {},     {}, {}, {}, {}, {}, {}, {}, {}, {right:true}, {}, {}
    ],
    
  ];
  
  const images = [
    { imageLink: "assets/skillIcons/html.png", i: 0, j: 0 },
    { imageLink: "assets/skillIcons/css.png", i: 1, j: 0 },
    { imageLink: "assets/skillIcons/js.png", i: 1, j: 3 },
    { imageLink: "assets/skillIcons/tailwind.png", i: 1, j: 1 },
    { imageLink: "assets/skillIcons/react.png", i: 0, j: 1 },
    { imageLink: "assets/skillIcons/bootstrap.png", i: 2, j: 0 },
    { imageLink: "assets/skillIcons/nodejs.png", i: 1, j: 8 },
    { imageLink: "assets/skillIcons/express.png", i: 2, j: 8 },
    { imageLink: "assets/skillIcons/spring.png", i: 2, j: 7 },
    { imageLink: "assets/skillIcons/springboot.png", i: 1, j: 7 },
    { imageLink: "assets/skillIcons/sql.png", i: 3, j: 11 },
    { imageLink: "assets/skillIcons/mongodb.png", i: 4, j: 11 },
    { imageLink: "assets/skillIcons/java.png", i: 3, j: 4 },
    { imageLink: "assets/skillIcons/cpp.png", i: 2, j: 5 },
    { imageLink: "assets/skillIcons/c.png", i: 2, j: 4 },
    { imageLink: "assets/skillIcons/python.png", i: 3, j: 5 },
    { imageLink: "assets/skillIcons/git.png", i: 8, j: 9 },
    { imageLink: "assets/skillIcons/github.png", i: 9, j: 10 },
    { imageLink: "assets/skillIcons/hadoop.png", i: 7, j: 1 },
    { imageLink: "assets/skillIcons/aws.png", i: 8, j: 2 },
    { imageLink: "assets/skillIcons/REST.png", i: 9, j: 11 },
    { imageLink: "assets/skillIcons/firebase.png", i: 8, j: 10 },
    { imageLink: "assets/skillIcons/agile.png", i: 8, j: 4 },
    { imageLink: "assets/skillIcons/dataStructure.png", i: 5, j: 6 },
    { imageLink: "assets/skillIcons/algorithm.png", i: 6, j: 6 },
    { imageLink: "assets/skillIcons/mvc.png", i: 6, j: 5 },
  ];
  export default function SkillGrid() {
    return (
      <div className="grid gap-0 m-0 justify-around bg-white dark:bg-black py-32 lg:scale-100 md:scale-75 ">
        <div className="overflow-x-auto">
          <div className="grid grid-cols-12 gap-0">
            {gridData.map((row, rowIndex) =>
              row.map((cell, colIndex) => {
                // Check if an image exists at this cell
                const imageObj = images.find((img) => img.i === rowIndex && img.j === colIndex);
  
                // Build border classes based on cell's true/false edges
                const borders = [];
                if (cell.top) borders.push("border-t-2 border-[#aaa] dark:border-[#222]");
                if (cell.right) borders.push("border-r-2 border-[#aaa] dark:border-[#222]");
                if (cell.bottom) borders.push("border-b-2 border-[#aaa] dark:border-[#222]");
                if (cell.left) borders.push("border-l-2 border-[#aaa] dark:border-[#222]");
  
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`w-20 h-20 bg-transparent flex items-center p-2 justify-center ${borders.join(" ")}`}
                  >
                    {/* Conditionally render image if found */}
                    {imageObj && <img src={`${import.meta.env.BASE_URL}${imageObj.imageLink}`} alt="Skill Icon" className="w-16 h-16 object-contain grayscale-100 hover:grayscale-0 hover:scale-110" />}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }