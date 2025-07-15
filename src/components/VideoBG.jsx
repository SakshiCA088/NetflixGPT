import React from 'react'
import { useSelector } from 'react-redux' 
import useMovieTrailer from "../hooks/useMovieTrailer.js"

const VideoBG = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo)

  useMovieTrailer(movieId );

  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video'
      width="560" 
      height="315" 
      src={
        "https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"
      }
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe>
    </div>
  )
}


export default VideoBG

// {
//   "id": 1011477,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "10 Minute Extended Preview",
//       "key": "ZuKbmha4QpA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-07-08T17:00:56.000Z",
//       "id": "686d8ffcab576745cdceede7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Special Features Preview",
//       "key": "MaOZlpGq-7o",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-07-08T13:00:44.000Z",
//       "id": "686d8ff11b9a8ab1e8a960ea"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Go Behind The Scenes with Ben Wang & Sadie Stanley",
//       "key": "1EaHqD8dA00",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2025-06-12T21:10:10.000Z",
//       "id": "684c4f07d1d0dbe543b0d910"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The Legend Continues",
//       "key": "c72rxlFDLRk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-26T13:01:13.000Z",
//       "id": "68347bd121a485fb6b037621"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Sizzle",
//       "key": "8zggkLGCpI8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-21T14:00:27.000Z",
//       "id": "682f314e26ce4a249aa8d364"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas May 28",
//       "key": "wjk89a-2bZI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-14T04:30:39.000Z",
//       "id": "68244459d316e950135a3578"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas May 28",
//       "key": "MtvtbVTvkLg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-14T03:30:13.000Z",
//       "id": "682444507d5a6bf67d7e8469"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas May 28",
//       "key": "6S-CuWPRunA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-14T03:00:10.000Z",
//       "id": "682444435097c5c63f6eedde"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas May 28",
//       "key": "667qiJx3wJg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-14T02:30:04.000Z",
//       "id": "6824443a98c1c15d746eec81"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas May 28",
//       "key": "5SYsPCFj2G4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-14T02:00:04.000Z",
//       "id": "68244428badcd951ef4b4e10"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In Cinemas May 28",
//       "key": "2NolEC1lBqw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-14T01:30:06.000Z",
//       "id": "6824441ea9d34f77027e8486"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Reasons Why Top 3 Vignette",
//       "key": "bkwmmdxiEzI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-05-12T09:21:23.000Z",
//       "id": "68229ca041cfdac3c8a164c3"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Legend or Lie",
//       "key": "jeFCdS5y_hc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-04-08T16:36:02.000Z",
//       "id": "67f598a08cfccf7bafd9a3b0"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Bringing Worlds Together",
//       "key": "T_RMHAc-VjE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2025-04-01T15:55:50.000Z",
//       "id": "67ecdc41f5ae71435daae525"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Remember what you’re fighting for.",
//       "key": "LA2zVo6G7FQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-04-01T13:02:51.000Z",
//       "id": "67ebe48558e0aa2338fb128a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "New Trailer",
//       "key": "LhRXf-yEQqA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-04-01T13:00:34.000Z",
//       "id": "67ebe70749700881fcfb2787"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Two branches. One tree.",
//       "key": "eUQFjpLCdXQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-03-07T18:53:28.000Z",
//       "id": "67cfe954360202690681175f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "uPzOyzsnmio",//youtube key
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",//we want this
//       "official": true,
//       "published_at": "2024-12-17T14:00:51.000Z",
//       "id": "676184ead183d1e25ccbef06"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Global Casting Search",
//       "key": "1MR1HPas-VA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-11-21T17:00:01.000Z",
//       "id": "655d480d629b2c013bb07bca"
//     }
//   ]
// }