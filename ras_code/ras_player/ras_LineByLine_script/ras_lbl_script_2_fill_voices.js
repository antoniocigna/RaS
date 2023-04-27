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
	
	
	console.log( numTotVoices + " voices loaded" ); 
	//console.log("voices[0]=" + voices[0].name); 
	//console.log("voices["+(numTotVoices-1)+"]=" + voices[(numTotVoices-1)].name); 
	
	selected_voice_ix = -1;
	
	
	var swNotFound = true;
	for(var ix=0; ix < numTotVoices; ix++) {
		if (selected_voice_name == voices[ix].name) {
			swNotFound = false;
			selected_voice_ix        = ix; 		
			console.log("voice found in getVoices() --> index: selected_voice_ix=" + selected_voice_ix); 
			break;
		}		
	}
	var vox;
	listVox = [];
	totNumMyLangVoices=0; 
	var ixLa4=-1;var ixLa2=-1;
	if (swNotFound) {
		console.log("voce name '" + selected_voice_name + "'  not found, maybe you have not used the same browser as in the Builder phase"); 
		console.log("\tnow it is looked for the same language-region or at least the same language");
		for(var v2=0; v2 < voices.length; v2++) {
			vox = voices[v2];
			if (vox.lang == selected_langRegion) {
					console.log("\tfound the same language-region '" + selected_langRegion + "' voce name '" + vox.name+"'"); 
					ixLa4 = v2;
					break; 
			}	
			if (ixLa2 >= 0) continue;
			if (vox.lang.substr(0,2) == selected_voiceLang2) ixLa2 = v2;	
		}	
		if (ixLa4 < 0) {
				console.log("\tthe same language-region has not been found,");
				ixLa4 = ixLa2;
				if (ixLa4 > 0) {
					vox = voices[ixLa4];	
					console.log("\tbut the same language has been found '" + vox.lang + "' voce name '" + vox.name+"'"); 				
				}
		}		
		if (ixLa4 >=0) selected_voice_ix = ixLa4;	
	}
	if (selected_voice_ix < 0) {
		selected_voice_ix = 99999;	
		console.log("the required voice language '"  + selected_voiceLang2 + 
			"' has not been found, no voice will be used"); 
		listVox = []; 	
		totNumMyLangVoices=0;
		hide_synthVoices();
		return;		
	}
	if (selected_voice_ix < numTotVoices) { 
		vox = voices[selected_voice_ix];			
		selected_voice_name = vox.name; 
		selected_langRegion = vox.lang; 
		selected_voiceLang2 = selected_langRegion.substr(0,2); 
		listVox.push( [vox.lang , vox] );  
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
 
	for(v3=0; v3 < listVox.length; v3++) {		
		var vv1, vv2; 
		[vv1,vv2] = listVox[v3]
		console.log("listVox[" +v3 + "] = " + vv1 + " " + vv2.name);
	}
	//----------------	
	var chosenIxVox=0;
	//-----------
	totNumMyLangVoices = listVox.length; 
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
//-------------------
function hide_synthVoices() {
	console.log("hide all buttons about synthetic voices"); 	
	document.getElementById("id_play_synth"    ).style.display    = "none"; 
	document.getElementById("id_col_5_synth"   ).style.visibility = "collapse"; 
	document.getElementById("id_col_9_11_synth").style.visibility = "collapse"; 
}
//======================================	

//--------------------------
function test_theVoice(lang2, myVoice) {
	if (lang2 == myVoice.lang.substr(0,2) ) return true;  
	
} // end of test_theVoice()

//====================================== 