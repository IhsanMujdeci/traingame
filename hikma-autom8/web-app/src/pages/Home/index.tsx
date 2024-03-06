import './style.scss';
import {useRef, useState} from "preact/compat";
import {search} from "../../api/listings";
import {domToJpeg} from 'modern-screenshot'
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBed, faBath, faCar } from "@fortawesome/free-solid-svg-icons";
import {LinearGradient} from "../../components/LinearGradient/LinearGradient";
import logo from  '/morton-white-png.png'
import {Banner} from "../../components/CircleBanner/Baner";
import {TriangleBorder} from "../../components/Triangle/Triangle";

export function Home() {
	return (
		<div>
			<Search/>
		</div>
	);
}

function Search() {

	const [searchKeyWord, setSearchKeyWord ] = useState('')
	const [listings, setListings] = useState([])

	function handleChange(event) {
		setSearchKeyWord(event.target.value);
	}

	async function onSearch(){
		try{
			const fetchedListings = await search(searchKeyWord)
			setListings(fetchedListings.listings)
		} catch (e){
			console.log(e)
		}
	}



	return (
		<div>
			<p>Search</p>
			<input type="text" onChange={handleChange} value={searchKeyWord}/>
			<button onClick={onSearch}>search</button>

			{/*<div class='listings-by-date'>*/}
			{/*	{listings.map( x=> <Listing listing={x}/>)}*/}
			{/*</div>*/}

			{/*<div className='listings-by-date'>*/}
			{/*	{listings.map(x => <ListingB listing={x}/>)}*/}
			{/*</div>*/}

			<div className='listings-by-date'>
				{listings.map(x => <ListingC listing={x}/>)}
			</div>

		</div>
	);
}

type ListingContainerProps = {
	children: React.ReactNode
}
function ListingContainer(props: ListingContainerProps){
	const [topText, setTopText] = useState('Inner City')
	const [bottomText, setBottomText] = useState('Living')
	const [circleText, setCircleText] = useState('JUST LISTED')
	const ref = useRef(null)

	async function downloadImage(){
		domToJpeg(ref.current).then(dataUrl => {
			const link = document.createElement('a')
			link.download = 'screenshot.png'
			link.href = dataUrl
			link.click()
		})
	}

	return <>
		{props.children}
	</>
}

function ListingA({listing}: {listing: any}){

	const [topText, setTopText] = useState('Inner City')
	const [bottomText, setBottomText] = useState('Living')
	const [circleText, setCircleText] = useState('JUST LISTED')
	const ref = useRef(null)
	// const [image, takeScreenshot] = useScreenshot()

	// console.log(image)

	async function downloadImage(){
		console.log(ref)
		// const base64 = await fetch(listing.images[0])
		// 	.then(response => response.blob())
		// 	.then(blob => {
		// 		const reader = new FileReader();
		// 		reader.readAsDataURL(blob);
		// 		return new Promise((res) => {
		// 			reader.onloadend = () => {
		// 				res(reader.result);
		// 			}})
		// 	})
		// console.log(base64)
		// console.log(ref.current)
		// toCanvas(ref.current, {allowTaint: true, useCORS: true})
		// 	.then((canvas) => {
		//
		// 		var croppedCanvas = document.createElement('canvas');
		// 		var croppedCanvasContext = croppedCanvas.getContext('2d'); // init data
		//
		// 		var cropPositionTop = 0;
		// 		var cropPositionLeft = 0;
		// 		var cropWidth = canvas.width;
		// 		var cropHeight = canvas.height;
		// 		croppedCanvas.width = cropWidth;
		// 		croppedCanvas.height = cropHeight;
		// 		croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);
		// 		var base64Image = croppedCanvas.toDataURL('image/png', 1);
		// 		console.log(base64Image)
		// 	})
		// 	.catch((err) => {
		// 		console.log(err)
		// 	})
		// takeScreenshot(ref.current)
		// takeScreenshot(null)

		domToJpeg(ref.current).then(dataUrl => {
			const link = document.createElement('a')
			link.download = 'screenshot.png'
			link.href = dataUrl
			link.click()
		})
	}

	return <>
		<div class='Listing' >
			<p>{listing.name}</p>
			<p>{listing.agentName}</p>
			<p>{listing.agentPhone}</p>
			<a href={listing.link}>Link to website</a>
			<button onClick={downloadImage}> Download Image</button>

			<input type="text" value={topText} onChange={(e)=>{setTopText((e.target as any).value)}}/>
			<input type="text" value={bottomText} onChange={(e)=>{setBottomText((e.target as any).value)}}/>
			<input type="text" value={circleText} onChange={(e)=>{setCircleText((e.target as any).value)}}/>

			<div className='listing-showcase' ref={ref}>
				<div className={'image-container'}>
					<Banner label={circleText}/>
					<img src={listing.images[0]} alt="" />
				</div>

				<div className='details'>
					<div className='leftHero'>
						<div className="top">{topText}</div>
						<div className="bottom">
							{bottomText}
							<div className='styled-full-stop'></div>
						</div>
					</div>
					<div className='details-property'>
						<div className='details-agent'>
							<div className='agent-name'>{listing.agentName}</div>
							<div>{listing.agentPhone}</div>
						</div>

						<div className='vertical-line'/>

						<div className='property-location'>
							<div className='street-address'>{listing.name.split(',')[0]}</div>
							<div>{listing.name.split(',')[1]}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}


function ListingB({listing}: {listing: any}){

	const [topText, setTopText] = useState('Inner City')
	const [bottomText, setBottomText] = useState('Living')
	const [circleText, setCircleText] = useState('JUST LISTED')
	const ref = useRef(null)
	// const [image, takeScreenshot] = useScreenshot()

	// console.log(image)

	async function downloadImage(){
		domToJpeg(ref.current).then(dataUrl => {
			const link = document.createElement('a')
			link.download = 'screenshot.png'
			link.href = dataUrl
			link.click()
		})
	}

	return <>
		<div class='Listing ListingB' >
			<p>{listing.name}</p>
			<p>{listing.agentName}</p>
			<p>{listing.agentPhone}</p>
			<a href={listing.link}>Link to website</a>
			<button onClick={downloadImage}> Download Image</button>

			<input type="text" value={topText} onChange={(e)=>{setTopText((e.target as any).value)}}/>
			<input type="text" value={bottomText} onChange={(e)=>{setBottomText((e.target as any).value)}}/>
			<input type="text" value={circleText} onChange={(e)=>{setCircleText((e.target as any).value)}}/>

			<div className='listing-showcase' ref={ref}>
				<div className={'image-container'}>
					<Banner label={circleText} type={"square"}/>
					<img src={listing.images[0]} alt="" />
				</div>
				<LinearGradient>
					<div className='details'>
							<div className='details-property'>
								<div className={'property-features'}>
									<div><FontAwesomeIcon icon={faBed} /> {listing.bedroom}</div>
									<div><FontAwesomeIcon icon={faBath} /> {listing.bathroom}</div>
									<div><FontAwesomeIcon icon={faCar} /> {listing.carSpace}</div>
								</div>

								<div className='property-location'>
									<div className='street-address'>{listing.name}</div>
								</div>
							</div>
					</div>
				</LinearGradient>
			</div>
		</div>
	</>
}


function useDownloadImage(fileName: string = 'screenshot'){

	const ref = useRef(null)

	function downloadImage(){
		domToJpeg(ref.current).then(dataUrl => {
			const link = document.createElement('a')
			link.download = fileName
			link.href = dataUrl
			link.click()
		})
	}

	return {
		ref,
		downloadImage
	}
}

function ListingC({listing}: {listing: any}){


	const [topText, setTopText] = useState('Inner City')
	const [bottomText, setBottomText] = useState('Living')
	const [circleText, setCircleText] = useState('JUST LISTED')

	const {ref, downloadImage} = useDownloadImage(listing.name)

	return <ListingContainer>
		<div class='Listing ListingB ListingC' >
			<p>{listing.name}</p>
			<p>{listing.agentName}</p>
			<p>{listing.agentPhone}</p>
			<a href={listing.link}>Link to website</a>
			<button onClick={downloadImage}> Download Image</button>

			<input type="text" value={topText} onChange={(e)=>{setTopText((e.target as any).value)}}/>
			<input type="text" value={bottomText} onChange={(e)=>{setBottomText((e.target as any).value)}}/>
			<input type="text" value={circleText} onChange={(e)=>{setCircleText((e.target as any).value)}}/>

			<div className='listing-showcase' ref={ref}>

				<TriangleBorder/>
				<div className={'image-container'}>
					<Banner label={circleText} type={"circle"}/>
					<img src={listing.images[0]} alt="" />
				</div>
				<LinearGradient>
					<div className='details'>

						<div className='details-property'>

							<div className={'property-features'}>
								<div><FontAwesomeIcon icon={faBed} /> {listing.bedroom}</div>
								<div><FontAwesomeIcon icon={faBath} /> {listing.bathroom}</div>
								<div><FontAwesomeIcon icon={faCar} /> {listing.carSpace}</div>
							</div>

							<div className='property-location'>
								<div className='street-address'>{listing.name}</div>
							</div>
						</div>

						<div className={'logo-container'}>
							<img src={logo} className={'logo'}/>;
						</div>


					</div>
				</LinearGradient>
			</div>
		</div>
	</ListingContainer>
}