const Loader = () => {
    return (
        <div className="flex justify-center items-center py-3 mt-12">
            <div className="flex items-center justify-center absolute text-sm text-[#9ccddc] text-glow"><h1>Loading Data...</h1></div>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#9ccddc]"/>
        </div>
    )
}

 // HEX CODES:
    // #062c43
    // #054569
    // #5591a9
    // #9ccddc
    // #ced7e0

export default Loader