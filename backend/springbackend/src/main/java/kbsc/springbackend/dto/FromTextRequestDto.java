package kbsc.springbackend.dto;

import lombok.Getter;


public class FromTextRequestDto {
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

//    public String getId() {
//        return id;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }

    String text;
//    String id;
}
