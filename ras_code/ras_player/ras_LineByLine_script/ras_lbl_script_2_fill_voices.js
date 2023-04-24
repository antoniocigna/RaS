"use strict";
/*  
LineByLine: A tool to practice language comprehension
Antonio Cigna 2023
license MIT: you can share and modify the software, but you must include the license file 
*/
/* jshint strict: true */
/* jshint esversion: 6 */
/* jshint undef: true, unused: true */
//----------------------------------------------
var currScript = document.currentScript.src; var bar1 = currScript.lastIndexOf("\\");var bar2 = currScript.lastIndexOf("/"); 
console.log("LOADED file SCRIPT " + currScript.substring( 1+Math.max(bar1,bar2) )) ;	
//----------------------------------------------------------------------------------------
/*
let selected_voice_ix                    = 0 ;     // eg. 65 	 
let selected_voice_name                   = "";     // eg. Microsoft David - English (United States)"; 	
let	selected_langRegion             = "";     // eg. en-us	
let	selected_voiceLang2                  = "";     // eg. en
*/
//======================================	

//let selected_langRegion = ""; // got from url parameter:  language-region and number of voices in this language eg. de-DE    
//let selected_voice_name = ""; // got from url parameter:  voice name eg. Microsoft Stefan - German (Germany)	
//----------------
function tts_2_fill_the_voices() { 
	console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nxx tts_2_fill_the_voices()\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
	var numTotVoices = voices.length
	
	console.log("selected_voice_name=" + selected_voice_name) + " (from url parameter)"; 
	console.log("selected_langRegion=" + selected_langRegion  + " (from url parameter)"  ); 
	
	
	console.log("voices.length=" + numTotVoices); 
	console.log("voices[0]=" + voices[0].name); 
	console.log("voices["+(numTotVoices-1)+"]=" + voices[(numTotVoices-1)].name); 
	
	
	let selected_voiceLang2 = selected_langRegion.substr(0,2); 	
	
	for(var ix=0; ix < numTotVoices; ix++) {
		if (selected_voice_name == voices[ix].name) {
			selected_voice_ix        = ix; 		
			console.log("voice found in getVoices() --> index: selected_voice_ix=" + selected_voice_ix); 
			break;
		}
		
	}
	var vox;
	listVox = [];
	
	//firstly the chosen language-voice
	vox = voices[selected_voice_ix];
	 
	listVox.push( [vox.lang , vox] );  
	if (selected_langRegion != vox.lang) {
		console.log("tts_2_fill_the_voices() " + "\n\tselected_voice_ix=" + selected_voice_ix + 
			"\n\tselected_voice_name = " + selected_voice_name +
			"\n\tselected_langRegion = " + selected_langRegion +
			"\n\tselected_voiceLang2 = " + selected_voiceLang2); 
		console.log("ERROR vox.lang (from voices[selected_voice_ix]) = " + vox.lang  + 
				" vs " + "selected_langRegion=" +selected_langRegion);  
		console.log(signalError)		
	}
	
	//------------------------------------------
	// secondly the same language-region 
	for(var v2=0; v2 < voices.length; v2++) {
		vox = voices[v2];
		if (v2 == selected_voice_ix) continue; 
		
		if (selected_langRegion != vox.lang ) continue;	
		
		listVox.push( [vox.lang , vox] );  		
	}
	//---------------------------------	
	// thirdly the same language
	for(var v2=0; v2 < voices.length; v2++) {
		vox = voices[v2];
		if (selected_langRegion == vox.lang ) continue;	
		if (selected_voiceLang2 != vox.lang.substr(0,2) ) continue;				
		listVox.push( [vox.lang , vox] );  
	}
	//---------------------------------	
	//
	for(v3=0; v3 < listVox.length; v3++) {		
		var vv1, vv2; 
		[vv1,vv2] = listVox[v3]
		console.log("listVox[" +v3 + "] = " + vv1 + " " + vv2.name);
	}
	//----------------	
	var chosenIxVox=0;
	//-----------
	if (listVox.length == 0) {
		return; 
	}
	console.log("listVox length=" + listVox.length); 
	voice_toUpdate_speech = listVox[0][1] ;	

	
	var voxLang;
	var pVox = ""; var xbr; 
	var vv3=0; var v3;
	var idhvox, idh2, eleH; 
	totNumMyLangVoices = listVox.length;
	
 	
} // end of fill_the_voices()



//======================================	
function TOGLItts_2_fill_the_voices() { 
	
	console.log("voices.length=" + voices.length); 
	
	var vox;
	listVox = [];
	
	//firstly the chosen language-voice
	vox = voices[selected_voice_ix];
	 
	listVox.push( [vox.lang , vox] );  
	if (selected_langRegion != vox.lang) {
		console.log("tts_2_fill_the_voices() " + "\n\tselected_voice_ix=" + selected_voice_ix + 
			"\n\tselected_voice_name = " + selected_voice_name +
			"\n\tselected_langRegion = " + selected_langRegion +
			"\n\tselected_voiceLang2 = " + selected_voiceLang2); 
		console.log("ERROR vox.lang (from voices[selected_voice_ix]) = " + vox.lang  + 
				" vs " + "selected_langRegion=" +selected_langRegion);  
		console.log(signalError)		
	}
	
	//------------------------------------------
	// secondly the same language-region 
	for(var v2=0; v2 < voices.length; v2++) {
		vox = voices[v2];
		if (v2 == selected_voice_ix) continue; 
		
		if (selected_langRegion != vox.lang ) continue;	
		
		listVox.push( [vox.lang , vox] );  		
	}
	//---------------------------------	
	// thirdly the same language
	for(var v2=0; v2 < voices.length; v2++) {
		vox = voices[v2];
		if (selected_langRegion == vox.lang ) continue;	
		if (selected_voiceLang2 != vox.lang.substr(0,2) ) continue;				
		listVox.push( [vox.lang , vox] );  
	}
	//---------------------------------	
	//
	for(v3=0; v3 < listVox.length; v3++) {		
		var vv1, vv2; 
		[vv1,vv2] = listVox[v3]
		console.log("listVox[" +v3 + "] = " + vv1 + " " + vv2.name);
	}
	//----------------	
	var chosenIxVox=0;
	//-----------
	if (listVox.length == 0) {
		return; 
	}
	console.log("listVox length=" + listVox.length); 
	voice_toUpdate_speech = listVox[0][1] ;	

	
	var voxLang;
	var pVox = ""; var xbr; 
	var vv3=0; var v3;
	var idhvox, idh2, eleH; 
	totNumMyLangVoices = listVox.length;
	
 	
} // end of fill_the_voices()

//--------------------------
function test_theVoice(lang2, myVoice) {
	if (lang2 == myVoice.lang.substr(0,2) ) return true;  
	
} // end of test_theVoice()

//====================================== 