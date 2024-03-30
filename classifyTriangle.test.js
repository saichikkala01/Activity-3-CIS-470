const classifyTriangle = require("./classifyTriangle");

describe("classifyTriangle: Required input conditions -  See readme for more details", () => {
    test("should classify an Equilateral triangle", () => {
        expect(classifyTriangle(10, 10, 10)).toBe("Equilateral");
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test("should classify an Isosceles triangle", () => {
        expect(classifyTriangle(10, 10, 5)).toBe("Isosceles");
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test("should classify a Scalene triangle", () => {
        expect(classifyTriangle(10, 12, 14)).toBe("Scalene");
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test("should return error for invalid inputs", () => {
        expect(classifyTriangle(0, 10, 10)).toBe(
            "Error: Input conditions C1, C2, or C3 failed.",
        );
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test('should return "Not a Triangle" for invalid triangle sides', () => {
        expect(classifyTriangle(1, 2, 3)).toBe("Not a Triangle");
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    // Test case 1: Equilateral triangle with sides of length 1
    it("should classify an equilateral triangle with sides of length 1", () => {
        const result = classifyTriangle(1, 1, 1);
        expect(result).toEqual("Equilateral");
    });

    // Test case 2: Equilateral triangle with sides of length 200
    it("should classify an equilateral triangle with sides of length 200", () => {
        const result = classifyTriangle(200, 200, 200);
        expect(result).toEqual("Equilateral");
    });

    // Test case 3: Isosceles triangle with sides of length 11, 11, and 21
    it("should classify an isosceles triangle with sides of length 11, 11, and 21", () => {
        const result = classifyTriangle(11, 11, 21);
        expect(result).toEqual("Isosceles");
    });

    // Test case 4: Isosceles triangle with sides of length 1, 2, and 2
    it("should classify an isosceles triangle with sides of length 1, 2, and 2", () => {
        const result = classifyTriangle(1, 2, 2);
        expect(result).toEqual("Isosceles");
    });

    // Test case 5: Scalene triangle with sides of length 3, 4, and 5
    it("should classify a scalene triangle with sides of length 3, 4, and 5", () => {
        const result = classifyTriangle(3, 4, 5);
        expect(result).toEqual("Scalene");
    });

    // Test case 6: Scalene triangle with sides of length 100, 101, and 102
    it("should classify a scalene triangle with sides of length 100, 101, and 102", () => {
        const result = classifyTriangle(100, 101, 102);
        expect(result).toEqual("Scalene");
    });

    // Test case 7: Not a Triangle with sides of length 1, 2, and 10
    it('should classify "Not a Triangle" with sides of length 1, 2, and 10', () => {
        const result = classifyTriangle(1, 2, 10);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 8: Not a Triangle with sides of length 1, 1, and 2
    it('should classify "Not a Triangle" with sides of length 1, 1, and 2', () => {
        const result = classifyTriangle(1, 1, 2);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 9: Not a Triangle with sides of length 1, 2, and 1
    it('should classify "Not a Triangle" with sides of length 1, 2, and 1', () => {
        const result = classifyTriangle(1, 2, 1);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 10: Not a Triangle with sides of length 200, 1, and 1
    it('should classify "Not a Triangle" with sides of length 200, 1, and 1', () => {
        const result = classifyTriangle(200, 1, 1);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 11: Not a Triangle with sides of length 1, 200, and 1
    it('should classify "Not a Triangle" with sides of length 1, 200, and 1', () => {
        const result = classifyTriangle(1, 200, 1);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 12: Not a Triangle with sides of length 1, 1, and 200
    it('should classify "Not a Triangle" with sides of length 1, 1, and 200', () => {
        const result = classifyTriangle(1, 1, 200);
        expect(result).toEqual("Not a Triangle");
    });

    // Test case 13: Not a Triangle with sides of length 201, 100, and 100
    it('should classify "Not a Triangle" with sides of length 201, 100, and 100', () => {
        const result = classifyTriangle(201, 100, 100);
        expect(result).toEqual("Error: Input conditions C1, C2, or C3 failed.");
    });

    // Test case 14: Not a Triangle with sides of length 100, 201, and 100
    it('should classify "Not a Triangle" with sides of length 100, 201, and 100', () => {
        const result = classifyTriangle(100, 201, 100);
        expect(result).toEqual("Error: Input conditions C1, C2, or C3 failed.");
    });

    // Test case 15: Not a Triangle with sides of length 100, 100, and 201
    it('should classify "Not a Triangle" with sides of length 100, 100, and 201', () => {
        const result = classifyTriangle(100, 100, 201);
        expect(result).toEqual("Error: Input conditions C1, C2, or C3 failed.");
    });

    // Test case 16: Isosceles triangle with sides of length 200, 100, and 200
    it("should classify an isosceles triangle with sides of length 200, 100, and 200", () => {
        const result = classifyTriangle(200, 100, 200);
        expect(result).toEqual("Isosceles");
    });

    // Test case 17: Isosceles triangle with sides of length 100, 200, and 200
    it("should classify an isosceles triangle with sides of length 100, 200, and 200", () => {
        const result = classifyTriangle(100, 200, 200);
        expect(result).toEqual("Isosceles");
    });

    // Test case 18: Isosceles triangle with sides of length 200, 200, and 100
    it("should classify an isosceles triangle with sides of length 200, 200, and 100", () => {
        const result = classifyTriangle(200, 200, 100);
        expect(result).toEqual("Isosceles");
    });

    // Test case 19: Scalene triangle with sides of length 199, 198, and 197
    it("should classify a scalene triangle with sides of length 199, 198, and 197", () => {
        const result = classifyTriangle(199, 198, 197);
        expect(result).toEqual("Scalene");
    });

    // Test case 20: Scalene triangle with sides of length 2, 3, and 4
    it("should classify a scalene triangle with sides of length 2, 3, and 4", () => {
        const result = classifyTriangle(2, 3, 4);
        expect(result).toEqual("Scalene");
    });
});
