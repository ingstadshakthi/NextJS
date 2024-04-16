'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';
export default function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef(null);
    function handlePick() {
        imageInput.current.click();
    }

    function handleImageChanged(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);

    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt='The image selected by user' fill />}
                </div>
                <input
                    ref={imageInput}
                    className={classes.input}
                    type='file'
                    id={name}
                    accept='image/png, image/jpeg'
                    onChange={handleImageChanged}
                    required
                    name={name} />
                <button
                    type='button'
                    onClick={handlePick}
                    className={classes.button}>
                    Pick an Image
                </button>

            </div>
        </div>
    )
}
