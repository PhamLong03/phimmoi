import { movies } from "@prisma/client";
import prisma from "./prisma";

export async function importMovie (){
    return await prisma.movies.create({
        data:{
            id: "movies 02",
            name: "Spider-man: Across the Spider-verse",
            slug: "spider-man-across-the-spider-verse-2",
            thumbnails: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/461ef09d460b5b4e4365c2826823db04.png",
            pictures: ["https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/461ef09d460b5b4e4365c2826823db04.png"],
            categories: [" Fantasic","Sci-fi"],
            storyLine: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
            directors: ["Joaquim", "Dos Santos"," Kemp Powers"],
            writers: ["Steve Ditko","Stan Lee","Chris McKenna"],
            stars:["Shameik Moore","Hailee Steinfeld","Brian Tyree Henry"]
        }
    })
}

export async function getMovie(slug: string) {
    return await prisma.movies.findUnique({
        where:{
            slug: slug
        }
    })
}
export async function getAllMovie() {
    return await prisma.movies.findMany({
        take:10
    })
}
export default {
    importMovie,
    getMovie,
    getAllMovie
}