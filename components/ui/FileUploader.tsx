'use client'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import {
    CheckCircleIcon,
    CircleArrowDown,
    HammerIcon,
    RocketIcon,
    SaveIcon
} from "lucide-react"

const FileUploader = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ onDrop })

    return (
        <div className='flex flex-col gap-4  items-center max-w-7xl mx-auto'>
            {/* Loading Tomorrow */}

            <div {...getRootProps()}
                className={`justify-center p-10 border-2 border-dashed m-10 w-[90%]  border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center text-center 
                    ${isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"}`}
            >
                <input {...getInputProps()} />

                <div className='flex flex-col items-center justify-center'>

                    {
                        isDragActive ?
                            <>
                                <RocketIcon className='h-20 w-20 animate-ping' />
                                <p>Drop the files here ...</p>
                            </>
                            :
                            <>
                                <CircleArrowDown className=" h-20 w-20 animate-bounce" />
                                <p>Drag and drop some files here, or click to select files</p>
                            </>
                    }
                </div>


            </div>
        </div>
    )
} 

export default FileUploader  