<script>
	import { onMount } from 'svelte';
	let infoWindow; // InfoWindow 객체를 저장할 변수 선언

	// 네이버지도 API 스크립트를 동적으로 로드합니다.
	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=here api key';
		script.async = true;
		script.defer = true;

		script.onload = () => {
			// 네이버지도 초기화 및 표시 로직을 이곳에 추가합니다.
			const map = new naver.maps.Map('map', {
				center: new naver.maps.LatLng(34.969912206036106, 127.47674609252671), // 초기 중심 좌표
				zoom: 17 // 초기 줌 레벨
			});

			// 마커 생성
			const marker = new naver.maps.Marker({
				position: new naver.maps.LatLng(34.969912206036106, 127.47674609252671), // 마커 위치
				map: map,
				title: '순천대학교 공과대학 3호관'
			});
			infoWindow = new naver.maps.InfoWindow({
				content: '<div>마커 타이틀</div>' // 초기에 열릴 내용 (원하는 내용으로 변경)
			});

			// 페이지 로드 시 InfoWindow 열기 (선택 사항)
			infoWindow.open(map, marker.getPosition());
		};
		document.head.appendChild(script);
	});
</script>

<div id="map" style="width: 100%; height: 400px;" />
