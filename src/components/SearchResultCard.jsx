import React from "react";

const SearchResultCard = (props) => {
    let video = props.video;
    let youtubeLink = `https://www.youtube.com/watch?v=${video.videoId}`;
  return (
    <>
      <a href={youtubeLink}>
        <div className="flex flex-col md:flex-row mb-8 md:mb-3 dark:lg:hover:bg-white/[0.1] hover:bg-slate-400/[0.1] rounded-xl md:p-4">
          <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnails[0]?.url}
            />
          </div>
          <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
            <span className="text-lg md:text-2xl font-semibold line-clamp-2 dark:text-purple-100 text-cyan-700">
              {video?.title}
            </span>
            <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 dark:text-purple-100 text-cyan-700 md:pr-24 md:my-4">
              {video?.descriptionSnippet}
            </span>
            <div className="hidden md:flex items-center">
              <div className="flex items-start mr-3">
                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold mt-2 dark:text-purple-100 text-cyan-700 flex items-center">
                  {video?.author?.title}
                </span>
                <div className="flex text-sm font-semibold dark:text-purple-100 text-cyan-700 truncate overflow-hidden">
                  <span className="flex text-[24px] leading-none font-bold dark:text-purple-100 text-cyan-700 relative top-[-10px] mx-1">
                    .
                  </span>
                  <span className="truncate">{video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default SearchResultCard;
