describe("Calculator tests", function() {
    describe("Adding tests", function() {
        it("should return 4", function() {
            expect(add(2,2)).toBe(4);
        }); 
        
        it("should not return 4 for different numbers", function() {
            expect(add(20,22)).toBe(42); 
        }); 
        
        it("should return an error for NaN", function() {
            expect(add("two", 22)).toBe("error"); 
        }); 
        
        it("should return error for more than 2 arguments", function() {
            expect(add(20, 22, 23)).toBe("error. You must only supply 2 numbers")
        })
    });
    describe("Subtraction test", function() {
        it("should return 4", function() {
            expect(sub(8, 4)).toBe(4); 
        }); 
        
        it("should not return 4 for different numbers", function() {
            expect(sub(10, 9)).toBe(1); 
        }); 
        
        // it("should return error for NaN", function() {
        //     expect(sub("twenty", 6)).toBe("error. Only insert numbers"); 
        // }); 
        
        it("should return an error for more than two arguments", function() {
            expect(sub(5,3,2)).toBe("error. You must only insert 2 numbers")
        }); 
        
        it("should return the argument if you only insert one argument", function() {
            expect(sub(4)).toBe(4); 
        })
        
        it("should return alert", function() {
            
            spyOn(window, "alert"); 
            sub("fish", 42); 
            expect(window.alert).toHaveBeenCalledWith("error, nan")
        })
    }); 
    describe("Multiplication test", function() {
        it("should return 4", function() {
            expect(mul(2,2)).toBe(4); 
        }); 
        
        it("should not return 4 with different numbers", function() {
            expect(mul(4, 4)).toBe(16); 
        }); 
        
        it("sould return error if NaN", function() {
            expect(mul("four", 4)).toBe("error, please insert only numbers"); 
        }); 
        
        it("should return error for more than two arguments", function() {
            expect(mul(4, 4, 4)).toBe("error, do not enter more than two numbers"); 
        }); 
        
        it("shoud return argument squared if only one argument is inserted", function() {
            expect(mul(4)).toBe(16); 
        })
    }); 
    describe("Division test", function() {
        it("should return 4", function() {
            expect(div(16, 4)).toBe(4); 
        }); 
        it("should not return 4 with different numbers", function() {
            expect(div(20, 4)).toBe(5); 
        }); 
        
        it("should return error if NaN", function() {
            expect(div("sixteen", 4)).toBe("Please only insert numbers"); 
        }); 
        
        it("should return error for more than two arguments", function() {
            expect(div(16, 4, 2)).toBe("error, please insert only two numbers")
        }); 
        
        it("should return argument divided by itself if only one argument", function() {
            expect(div(16)).toBe(1); 
        }) 
    })
})