function createWheels() {
    const geometry = new THREE.BoxBufferGeometry(12, 12, 33);
    const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const wheel = new THREE.Mesh(geometry, material);
    return wheel;
}


function createCar() {
    const car = new THREE.Group();

    const backWheel = createWheels();
    backWheel.position.y = 6;
    backWheel.position.x = -18;
    car.add(backWheel);

    const frontWheel = createWheels();
    frontWheel.position.y = 6;
    frontWheel.position.x = 18;
    car.add(frontWheel);

    const main = new THREE.Mesh(
        new THREE.BoxBufferGeometry(60, 15, 30),
        new THREE.MeshLambertMaterial({ color: 0xa52523 })
    );
    main.position.y = 12;
    car.add(main);

    const carFrontTexture = getCarFrontTexture();

    const carBackTexture = getCarFrontTexture();

    const carRightSideTexture = getCarSideTexture();

    const carLeftSideTexture = getCarSideTexture();
    carLeftSideTexture.center = new THREE.Vector2(0.5, 0.5);
    carLeftSideTexture.rotation = Math.PI;
    carLeftSideTexture.flipY = false;

    const cabin = new THREE.Mesh(new THREE.BoxBufferGeometry(33, 12, 24), [
            new THREE.MeshLambertMaterial({ map: carFrontTexture }),
            new THREE.MeshLambertMaterial({ map: carBackTexture }),
            new THREE.MeshLambertMaterial({ color: 0xffffff }), // top
            new THREE.MeshLambertMaterial({ color: 0xffffff }), // bottom
            new THREE.MeshLambertMaterial({ map: carRightSideTexture }),
            new THREE.MeshLambertMaterial({ map: carLeftSideTexture })
        ]);
    cabin.position.x = -6;
    cabin.position.y = 25.5;
    car.add(cabin);

    return car;
}