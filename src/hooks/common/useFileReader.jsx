export function useFileReader(){
    
    const readData = (file, setFile) => {
        const reader = new FileReader;
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFile(reader.result)
        }
    }

    return readData;
}