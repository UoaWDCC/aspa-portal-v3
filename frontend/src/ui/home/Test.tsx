export default function Test({content}) {
    return (
        <div style={{width: '200px', height: '200px', backgroundColor:'red'}}>
           {content}
           <br/>
           <button style={{backgroundColor: 'yellow'}}>button</button>
        </div>
    )
}
