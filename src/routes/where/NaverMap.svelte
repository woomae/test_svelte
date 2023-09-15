<script>
	import { onMount } from 'svelte';

	// 네이버지도 API 스크립트를 동적으로 로드합니다.
	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=NAVER_API_KEY';
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
				icon: {
					url: '../../../static/marker.png',
					scaledSize: new naver.maps.Size(30, 45),
					origin: new naver.maps.Point(0, 0)
				},
				position: new naver.maps.LatLng(34.969912206036106, 127.47674609252671), // 마커 위치
				map: map,
				title: '순천대학교 공과대학 3호관'
			});

			const contentString = [
				'<div class="iw_inner" style="padding:5px; margin: 5px 0px 5px 0px; width: 150px; height: 45px; text-align: center; ">',
				'   <p style="foint-size: 2rem; margin: 0;">순천대 공대 3호관</p>',
				'   <p style="font-size: 0.8rem; margin: 0;">순천시 중앙로 255</p>',
				'</div>'
			].join('');
			let infoWindow = new naver.maps.InfoWindow({
				content: contentString,
				borderWidth: 2,
				borderColor: 'black',
				disableAnchor: true,
				pixelOffset: new naver.maps.Point(0, -50)
			});

			// 페이지 로드 시 InfoWindow 열기
			infoWindow.open(map, marker.getPosition());
		};
		document.head.appendChild(script);
	});
</script>

<div id="map" style="width: 100%; height: 600px;" />
