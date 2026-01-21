import { useQuery } from "@tanstack/react-query"
import { fetchPost } from "../api/Allapi"

const AllPost = ()=>{

    const {data,isLoading,isError,error}= useQuery({
        queryKey:['posts'],
        queryFn:fetchPost,
    })
    console.log(data);
    
    
    return(
        <>
        <h1>all posts</h1>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{(error as Error).message}</p>}
        {data?.map((post:any)=>(
            <div key={post.id}>
                <div style={{color:"skyblue"}}>
                    {post.title}
                </div>
                <div style={{color:"revert-layer"}}>
                    {post.body}
                </div>
            </div>

        ))}
        
        </>
    )
}


export default AllPost