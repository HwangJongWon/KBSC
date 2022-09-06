package kbsc.springbackend.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@RequiredArgsConstructor
public class FlaskResponseDto {

    private List<String> name;
    private List<Integer> calorie;

    @Override
    public String toString(){
        StringBuilder result = new StringBuilder();
        for(String i : this.name){
            result.append(", ").append(i);
        }
        return result.toString();
    }
}
